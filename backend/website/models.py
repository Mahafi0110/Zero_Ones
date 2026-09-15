from django.db import models

class SiteSetting(models.Model):
    seo_title = models.CharField(max_length=255, default='CCTV Installation & Security Solutions in Madurai | Zero Ones')
    seo_description = models.TextField(default='CCTV camera installation, security cameras, GPS vehicle tracking, biometric attendance & cash counting machines in Madurai. Explore suitable security solutions from Zero Ones.')
    phone1 = models.CharField(max_length=20, default="9360484136")
    phone2 = models.CharField(max_length=20, default="9894010163")
    email = models.EmailField(default="zeroonessecurity@gmail.com")
    address = models.TextField(default="61, Indhira Nagar, Near Aavin Junction, K.K Nagar, Madurai - 20.")
    hero_title = models.CharField(max_length=255, default="CCTV & Security Solutions for Homes and Businesses in Madurai")
    about_text = models.TextField(default="Zero Ones Security System is a trusted provider of CCTV cameras, Biometric devices...")
    vision_text = models.TextField(default="To create safer and smarter environments with advanced security and technology solutions.")
    mission_text = models.TextField(default="To deliver reliable products, professional services and continuous support to our customers.")
    values_text = models.TextField(default="Trust, Quality, Customer Satisfaction and Long-term Relationships.")
    facebook_url = models.URLField(blank=True, default="")
    instagram_url = models.URLField(blank=True, default="")
    youtube_url = models.URLField(blank=True, default="")
    whatsapp_url = models.URLField(blank=True, default="")

    def __str__(self):
        return "Global Site Settings"

class Product(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    details = models.TextField(blank=True, default='')
    considerations = models.TextField(blank=True, default='')
    button_label = models.CharField(max_length=100, default='Explore Solutions')
    image = models.ImageField(upload_to='products/', blank=True, null=True)

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    details = models.TextField(blank=True, default='')
    considerations = models.TextField(blank=True, default='')
    button_label = models.CharField(max_length=120, default='Request Service')

    def __str__(self):
        return self.title


class ServicesSection(models.Model):
    heading = models.CharField(max_length=255, default='CCTV Installation & Technology Support in Madurai')
    description = models.TextField(default='Selecting a product is only the first step. Proper installation, setup, configuration and relevant support help ensure that the selected technology is prepared according to the site and usage requirements.')
    introduction = models.TextField(default='Zero Ones provides relevant installation and technical support across its core security and technology solutions.')

    class Meta:
        verbose_name = 'Services Section'
        verbose_name_plural = 'Services Section'

    def __str__(self):
        return 'Services Section'


class HeroSection(models.Model):
    title = models.CharField(max_length=255, default="CCTV & Security Solutions for Homes and Businesses in Madurai")
    subtitle = models.CharField(max_length=255, default="Sales | Installation | Service | Maintenance | Support")
    description = models.TextField(default='CCTV cameras, biometric attendance, GPS vehicle tracking and cash counting machines for homes, shops, offices and businesses in Madurai.')
    primary_button_label = models.CharField(max_length=100, default='Get a Consultation')
    secondary_button_label = models.CharField(max_length=100, default='Explore Our Solutions')
    background_image = models.ImageField(upload_to='hero/', blank=True, null=True)

    class Meta:
        verbose_name = 'Hero'
        verbose_name_plural = 'Hero'

    def __str__(self):
        return "Hero Section"


class NavbarSection(models.Model):
    brand_name = models.CharField(max_length=100, default="ZERONES")
    tagline = models.CharField(max_length=150, default="SECURITY SYSTEM Madurai")
    quote_label = models.CharField(max_length=100, default="Get a Quote")

    class Meta:
        verbose_name = 'Navbar'
        verbose_name_plural = 'Navbar'

    def __str__(self):
        return "Navbar Section"


class AboutSection(models.Model):
    heading = models.CharField(max_length=255, default="Zero Ones Security System")
    description = models.TextField(default="Zero Ones Security System is a trusted provider of CCTV cameras, Biometric devices, and complete IT security solutions.")
    extended_description = models.TextField(blank=True, default='')
    local_heading = models.CharField(max_length=255, default='Looking for a Local Solution?')
    local_description = models.TextField(default="Need a security or technology solution for your home or business? Zero Ones provides CCTV installation, GPS vehicle tracking, biometric and cash counting solutions in Madurai.")
    local_cta = models.TextField(default="Tell us your requirement. We'll help you find a suitable solution.")
    mission = models.TextField(default="To provide practical, reliable and requirement-focused security and technology solutions that help homes, workplaces and businesses choose, install and use suitable technology with confidence.")
    vision = models.TextField(default="To become a trusted technology solutions provider in Madurai, known for practical security, attendance, vehicle tracking and business technology solutions supported by clear guidance and dependable service.")
    approach = models.TextField(default='Understand → Recommend → Install → Configure → Support')

    class Meta:
        verbose_name = 'About'
        verbose_name_plural = 'About'

    def __str__(self):
        return "About Section"


class WhyChooseSection(models.Model):
    heading = models.CharField(max_length=255, default='A Practical Approach to Security & Technology Solutions')
    description = models.TextField(default='Zero Ones focuses on understanding the requirement first, recommending a suitable solution and providing relevant installation, configuration and support.')
    point1 = models.CharField(max_length=255, default='Requirement First — We start by understanding your actual requirement before recommending a product or system.')
    point2 = models.CharField(max_length=255, default='Suitable Product Guidance — Different homes, workplaces, vehicles and businesses require different specifications. We help you understand relevant options before planning.')
    point3 = models.CharField(max_length=255, default='Professional Installation — Our support extends beyond product selection to installation, configuration and basic system testing where applicable.')
    point4 = models.CharField(max_length=255, default='Multiple Technology Solutions — CCTV, biometric attendance, GPS tracking and cash counting requirements can be addressed through one technology solutions provider.')
    point5 = models.CharField(max_length=255, default='Clear Communication — We explain relevant product features, setup requirements and service considerations in a straightforward way.')
    point6 = models.CharField(max_length=255, default='Ongoing Support — When a system requires assistance after installation, we can help identify the appropriate service or maintenance requirement.')

    class Meta:
        verbose_name = 'Why Choose Zero Ones'
        verbose_name_plural = 'Why Choose Zero Ones'

    def __str__(self):
        return 'Why Choose Zero Ones Section'


class ContactSection(models.Model):
    heading = models.CharField(max_length=255, default='Find the Right Security & Technology Solution in Madurai')
    description = models.TextField(default='Have a requirement for CCTV, security cameras, biometric attendance, vehicle tracking or cash counting? Share your requirement with Zero Ones and our team can help you identify a suitable solution based on your needs.')
    support_title = models.CharField(max_length=255, default='We Support Requirements Related To')
    support_items = models.TextField(default='CCTV Installation\nCCTV Setup & Configuration\nCCTV Repair & Maintenance\nBiometric Attendance\nGPS Vehicle Tracking\nCash Counting Machines\nOther Relevant Technology Requirements')
    button_label = models.CharField(max_length=100, default='Request a Consultation')
    phone1 = models.CharField(max_length=20, default="9360484136")
    phone2 = models.CharField(max_length=20, default="9894010163")
    email = models.EmailField(default="zeroonessecurity@gmail.com")
    address = models.TextField(default="61, Indhira Nagar, Near Aavin Junction, K.K Nagar, Madurai - 20.")
    working_hours = models.CharField(max_length=150, default="Monday - Saturday, 9:00 AM - 7:00 PM")

    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contact'

    def __str__(self):
        return "Contact Section"


class FooterSection(models.Model):
    description = models.TextField(default="Your trusted partner for complete security and IT solutions in Madurai.")
    facebook_url = models.URLField(blank=True, default="")
    instagram_url = models.URLField(blank=True, default="")
    youtube_url = models.URLField(blank=True, default="")
    whatsapp_url = models.URLField(blank=True, default="")
    copyright_text = models.CharField(max_length=255, default="Zero Ones Security System. All Rights Reserved.")

    class Meta:
        verbose_name = 'Footer'
        verbose_name_plural = 'Footer'

    def __str__(self):
        return "Footer Section"


class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=30)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_replied = models.BooleanField(default=False)

    class Meta:
        ordering = ('-created_at',)
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'

    def __str__(self):
        return f'{self.name} - {self.created_at:%Y-%m-%d %H:%M}'


class HowItWorksSection(models.Model):
    title = models.CharField(max_length=255, default='A Simple Process From Requirement to Installation')
    step1 = models.CharField(max_length=255, default='Share Your Requirement — Tell us about your property, workplace, vehicle or business requirement.')
    step2 = models.CharField(max_length=255, default='Understand Your Needs — We evaluate relevant factors such as coverage, usage, number of users, vehicle type or operational requirements.')
    step3 = models.CharField(max_length=255, default='Recommend a Suitable Solution — We help you understand relevant products and configurations based on your actual requirement.')
    step4 = models.CharField(max_length=255, default='Install & Configure — Our team assists with installation, configuration and basic system testing based on the selected solution.')
    step5 = models.CharField(max_length=255, default='Get Support — After setup, relevant guidance and support are provided based on the product or service requirement.')

    class Meta:
        verbose_name = 'How It Works'
        verbose_name_plural = 'How It Works'

    def __str__(self):
        return 'How It Works Section'


class FAQItem(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ('order', 'id')
        verbose_name = 'FAQ Item'
        verbose_name_plural = 'FAQ Items'

    def __str__(self):
        return self.question


class Testimonial(models.Model):
    quote = models.TextField()
    name = models.CharField(max_length=120)
    role = models.CharField(max_length=120)
    rating = models.PositiveSmallIntegerField(default=5)
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ('order', 'id')

    def __str__(self):
        return self.name


class TrustedBrand(models.Model):
    name = models.CharField(max_length=100)
    style = models.CharField(max_length=255, default='text-gray-900 font-bold')
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ('order', 'id')
        verbose_name = 'Trusted Brand'
        verbose_name_plural = 'Trusted Brands'

    def __str__(self):
        return self.name