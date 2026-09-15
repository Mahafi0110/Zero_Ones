from rest_framework import serializers

from .models import (
	AboutSection, ContactMessage, ContactSection, FAQItem, FooterSection, HeroSection, HowItWorksSection, NavbarSection,
	Product, Service, ServicesSection, SiteSetting, Testimonial, TrustedBrand, WhyChooseSection,
)


class SiteSettingSerializer(serializers.ModelSerializer):
	class Meta:
		model = SiteSetting
		fields = (
			'seo_title', 'seo_description', 'phone1', 'phone2', 'email', 'address', 'hero_title', 'about_text',
			'vision_text', 'mission_text', 'values_text', 'facebook_url',
			'instagram_url', 'youtube_url', 'whatsapp_url',
		)


class ProductSerializer(serializers.ModelSerializer):
	image = serializers.SerializerMethodField()

	class Meta:
		model = Product
		fields = ('id', 'title', 'desc', 'details', 'considerations', 'button_label', 'image')

	def get_image(self, product):
		if not product.image:
			return None

		request = self.context.get('request')
		image_url = product.image.url
		return request.build_absolute_uri(image_url) if request else image_url


class ServiceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Service
		fields = ('id', 'title', 'desc', 'details', 'considerations', 'button_label')


class ServicesSectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = ServicesSection
		fields = ('id', 'heading', 'description', 'introduction')


class HeroSectionSerializer(serializers.ModelSerializer):
	background_image = serializers.SerializerMethodField()

	class Meta:
		model = HeroSection
		fields = ('id', 'title', 'subtitle', 'description', 'primary_button_label', 'secondary_button_label', 'background_image')

	def get_background_image(self, hero):
		if not hero.background_image:
			return None

		request = self.context.get('request')
		image_url = hero.background_image.url
		return request.build_absolute_uri(image_url) if request else image_url


class NavbarSectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = NavbarSection
		fields = ('id', 'brand_name', 'tagline', 'quote_label')


class AboutSectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = AboutSection
		fields = ('id', 'heading', 'description', 'extended_description', 'local_heading', 'local_description', 'local_cta', 'vision', 'mission', 'approach')


class WhyChooseSectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = WhyChooseSection
		fields = ('id', 'heading', 'description', 'point1', 'point2', 'point3', 'point4', 'point5', 'point6')


class ContactSectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = ContactSection
		fields = ('id', 'heading', 'description', 'support_title', 'support_items', 'button_label', 'phone1', 'phone2', 'email', 'address', 'working_hours')


class FooterSectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = FooterSection
		fields = ('id', 'description', 'facebook_url', 'instagram_url', 'youtube_url', 'whatsapp_url', 'copyright_text')


class ContactMessageSerializer(serializers.ModelSerializer):
	class Meta:
		model = ContactMessage
		fields = ('name', 'phone', 'email', 'message')


class HowItWorksSectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = HowItWorksSection
		fields = ('id', 'title', 'step1', 'step2', 'step3', 'step4', 'step5')


class FAQItemSerializer(serializers.ModelSerializer):
	class Meta:
		model = FAQItem
		fields = ('id', 'question', 'answer', 'order')


class TestimonialSerializer(serializers.ModelSerializer):
	class Meta:
		model = Testimonial
		fields = ('id', 'quote', 'name', 'role', 'rating', 'order')


class TrustedBrandSerializer(serializers.ModelSerializer):
	class Meta:
		model = TrustedBrand
		fields = ('id', 'name', 'style', 'order')
