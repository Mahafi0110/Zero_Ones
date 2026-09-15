from django.contrib import admin
from .models import (
	AboutSection,
	ContactSection,
	ContactMessage,
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


@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
	list_display = ('title', 'primary_button_label', 'secondary_button_label')


@admin.register(NavbarSection)
class NavbarSectionAdmin(admin.ModelAdmin):
	list_display = ('brand_name', 'tagline', 'quote_label')


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
	list_display = ('heading',)


@admin.register(WhyChooseSection)
class WhyChooseSectionAdmin(admin.ModelAdmin):
	list_display = ('heading',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
	list_display = ('title', 'button_label', 'image')
	search_fields = ('title', 'desc', 'details', 'considerations')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
	list_display = ('title', 'button_label')
	search_fields = ('title', 'desc', 'details', 'considerations')


@admin.register(ServicesSection)
class ServicesSectionAdmin(admin.ModelAdmin):
	list_display = ('heading',)


@admin.register(ContactSection)
class ContactSectionAdmin(admin.ModelAdmin):
	list_display = ('heading', 'phone1', 'email')


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
	list_display = ('name', 'email', 'phone', 'created_at', 'is_replied')
	list_filter = ('is_replied', 'created_at')
	search_fields = ('name', 'email', 'phone', 'message')
	readonly_fields = ('created_at',)


@admin.register(HowItWorksSection)
class HowItWorksSectionAdmin(admin.ModelAdmin):
	list_display = ('title',)


@admin.register(FAQItem)
class FAQItemAdmin(admin.ModelAdmin):
	list_display = ('question', 'order', 'is_published')
	list_filter = ('is_published',)
	search_fields = ('question', 'answer')


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
	list_display = ('name', 'role', 'rating', 'order', 'is_published')
	list_filter = ('is_published', 'rating')
	search_fields = ('name', 'role', 'quote')


@admin.register(TrustedBrand)
class TrustedBrandAdmin(admin.ModelAdmin):
	list_display = ('name', 'order', 'is_published')
	list_filter = ('is_published',)
	search_fields = ('name',)


@admin.register(FooterSection)
class FooterSectionAdmin(admin.ModelAdmin):
	list_display = ('copyright_text',)


@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
	fieldsets = (
		('SEO Metadata', {'fields': ('seo_title', 'seo_description')}),
		('Legacy Site Settings', {'fields': ('phone1', 'phone2', 'email', 'address', 'hero_title', 'about_text')}),
		('About Content', {'fields': ('vision_text', 'mission_text', 'values_text')}),
		('Social Links', {'fields': ('facebook_url', 'instagram_url', 'youtube_url', 'whatsapp_url')}),
	)