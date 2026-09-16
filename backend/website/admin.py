from django.contrib import admin
from django.utils.html import format_html

from .models import (
    AboutSection,
    ContactMessage,
    ContactSection,
    FAQItem,
    FooterSection,
    HeroSection,
    HowItWorksSection,
    NavbarSection,
    Product,
    Service,
    ServicesSection,
    SiteSetting,
    Testimonial,
    TrustedBrand,
    WhyChooseSection,
)


class ZeroOnesAdminSite(admin.AdminSite):
    site_header = 'Zero Ones Security System'
    site_title = 'Zero Ones Admin'
    index_title = 'Website Management Dashboard'
    empty_value_display = '—'


admin_site = ZeroOnesAdminSite(name='zeroones_admin')


def image_preview(obj):
    if obj.image:
        return format_html(
            '<img src="{}" style="max-height: 52px; max-width: 90px; border-radius: 8px; object-fit: cover;" />',
            obj.image.url,
        )
    return 'No image'


image_preview.short_description = 'Image'


@admin.register(HeroSection, site=admin_site)
class HeroSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'primary_button_label', 'secondary_button_label')
    search_fields = ('title', 'subtitle', 'description')
    list_per_page = 20


@admin.register(NavbarSection, site=admin_site)
class NavbarSectionAdmin(admin.ModelAdmin):
    list_display = ('brand_name', 'tagline', 'quote_label')
    search_fields = ('brand_name', 'tagline', 'quote_label')


@admin.register(AboutSection, site=admin_site)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ('heading', 'local_heading')
    search_fields = ('heading', 'description', 'local_heading', 'local_description')


@admin.register(WhyChooseSection, site=admin_site)
class WhyChooseSectionAdmin(admin.ModelAdmin):
    list_display = ('heading', 'point1', 'point6')
    search_fields = ('heading', 'description', 'point1', 'point2', 'point3', 'point4', 'point5', 'point6')


@admin.register(Product, site=admin_site)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'button_label', image_preview)
    search_fields = ('title', 'desc', 'details', 'considerations')
    list_per_page = 25


@admin.register(Service, site=admin_site)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'button_label')
    search_fields = ('title', 'desc', 'details', 'considerations')
    list_per_page = 25


@admin.register(ServicesSection, site=admin_site)
class ServicesSectionAdmin(admin.ModelAdmin):
    list_display = ('heading',)
    search_fields = ('heading', 'description', 'introduction')


@admin.register(ContactSection, site=admin_site)
class ContactSectionAdmin(admin.ModelAdmin):
    list_display = ('heading', 'phone1', 'email')
    search_fields = ('heading', 'description', 'support_title', 'address', 'email')


@admin.register(ContactMessage, site=admin_site)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at', 'is_replied')
    list_filter = ('is_replied', 'created_at')
    search_fields = ('name', 'email', 'phone', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    list_per_page = 25
    actions = ['mark_as_replied', 'mark_as_unreplied']

    def mark_as_replied(self, request, queryset):
        updated = queryset.update(is_replied=True)
        self.message_user(request, f'{updated} message(s) marked as replied.')

    mark_as_replied.short_description = 'Mark selected as replied'

    def mark_as_unreplied(self, request, queryset):
        updated = queryset.update(is_replied=False)
        self.message_user(request, f'{updated} message(s) marked as not replied.')

    mark_as_unreplied.short_description = 'Mark selected as not replied'


@admin.register(HowItWorksSection, site=admin_site)
class HowItWorksSectionAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title', 'step1', 'step2', 'step3', 'step4', 'step5')


@admin.register(FAQItem, site=admin_site)
class FAQItemAdmin(admin.ModelAdmin):
    list_display = ('question', 'order', 'is_published')
    list_editable = ('order', 'is_published')
    list_filter = ('is_published',)
    search_fields = ('question', 'answer')
    ordering = ('order', 'id')


@admin.register(Testimonial, site=admin_site)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'rating', 'order', 'is_published')
    list_editable = ('order', 'is_published', 'rating')
    list_filter = ('is_published', 'rating')
    search_fields = ('name', 'role', 'quote')
    ordering = ('order', 'id')


@admin.register(TrustedBrand, site=admin_site)
class TrustedBrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'is_published')
    list_editable = ('order', 'is_published')
    list_filter = ('is_published',)
    search_fields = ('name',)
    ordering = ('order', 'id')


@admin.register(FooterSection, site=admin_site)
class FooterSectionAdmin(admin.ModelAdmin):
    list_display = ('copyright_text', 'facebook_url', 'instagram_url')
    search_fields = ('description', 'facebook_url', 'instagram_url', 'youtube_url', 'whatsapp_url', 'copyright_text')


@admin.register(SiteSetting, site=admin_site)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ('seo_title', 'phone1', 'email')
    fieldsets = (
        ('SEO Metadata', {'fields': ('seo_title', 'seo_description')}),
        ('Legacy Site Settings', {'fields': ('phone1', 'phone2', 'email', 'address', 'hero_title', 'about_text')}),
        ('About Content', {'fields': ('vision_text', 'mission_text', 'values_text')}),
        ('Social Links', {'fields': ('facebook_url', 'instagram_url', 'youtube_url', 'whatsapp_url')}),
    )
    search_fields = ('seo_title', 'seo_description', 'email', 'address', 'phone1', 'phone2')
    save_on_top = True


admin.site = admin_site