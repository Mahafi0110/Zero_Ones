from django.conf import settings as django_settings
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from .models import (
	AboutSection, ContactMessage, ContactSection, FAQItem, FooterSection, HeroSection, HowItWorksSection, NavbarSection,
	Product, Service, ServicesSection, SiteSetting, Testimonial, TrustedBrand, WhyChooseSection,
)
from .serializers import (
	AboutSectionSerializer, ContactSectionSerializer, FAQItemSerializer, FooterSectionSerializer,
	HeroSectionSerializer, HowItWorksSectionSerializer, NavbarSectionSerializer, ProductSerializer,
	ServiceSerializer, ServicesSectionSerializer, SiteSettingSerializer, ContactMessageSerializer,
	TestimonialSerializer, TrustedBrandSerializer, WhyChooseSectionSerializer,
)


class SiteContentView(APIView):
	def get(self, request):
		settings = SiteSetting.objects.first()
		return Response({
			'settings': SiteSettingSerializer(settings).data if settings else None,
			'hero': HeroSectionSerializer(
				HeroSection.objects.first(),
				context={'request': request},
			).data if HeroSection.objects.exists() else None,
			'navbar': NavbarSectionSerializer(NavbarSection.objects.first()).data if NavbarSection.objects.exists() else None,
			'about': AboutSectionSerializer(AboutSection.objects.first()).data if AboutSection.objects.exists() else None,
			'why_choose': WhyChooseSectionSerializer(WhyChooseSection.objects.first()).data if WhyChooseSection.objects.exists() else None,
			'contact': ContactSectionSerializer(ContactSection.objects.first()).data if ContactSection.objects.exists() else None,
			'footer': FooterSectionSerializer(FooterSection.objects.first()).data if FooterSection.objects.exists() else None,
			'how_it_works': HowItWorksSectionSerializer(HowItWorksSection.objects.first()).data if HowItWorksSection.objects.exists() else None,
			'faqs': FAQItemSerializer(FAQItem.objects.filter(is_published=True), many=True).data,
			'testimonials': TestimonialSerializer(Testimonial.objects.filter(is_published=True), many=True).data,
			'brands': TrustedBrandSerializer(TrustedBrand.objects.filter(is_published=True), many=True).data,
			'products': ProductSerializer(
				Product.objects.all(),
				many=True,
				context={'request': request},
			).data,
			'services': ServiceSerializer(Service.objects.all(), many=True).data,
			'services_section': ServicesSectionSerializer(ServicesSection.objects.first()).data if ServicesSection.objects.exists() else None,
		})


class ContactMessageView(APIView):
	authentication_classes = []
	permission_classes = [AllowAny]

	def post(self, request):
		serializer = ContactMessageSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		contact_message = serializer.save()

		recipient = ContactSection.objects.values_list('email', flat=True).first()
		recipient = recipient or django_settings.DEFAULT_FROM_EMAIL

		try:
			send_mail(
				subject=f'New website enquiry from {contact_message.name}',
				message=(
					f'Name: {contact_message.name}\n'
					f'Phone: {contact_message.phone}\n'
					f'Email: {contact_message.email}\n\n'
					f'Message:\n{contact_message.message}'
				),
				from_email=django_settings.DEFAULT_FROM_EMAIL,
				recipient_list=[recipient],
				reply_to=[contact_message.email],
			)
		except Exception:
			return Response(
				{'detail': 'Your message was saved, but email delivery is not configured yet.'},
				status=503,
			)

		return Response({'detail': 'Message sent successfully.'}, status=201)
