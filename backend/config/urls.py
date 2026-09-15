"""
URL configuration for config project.
"""

from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse
from django.urls import path

from website.views import ContactMessageView, SiteContentView


def home(request):
    return JsonResponse({
        "status": "success",
        "message": "Zero-One backend is running"
    })


urlpatterns = [
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('api/site/', SiteContentView.as_view(), name='site-content'),
    path('api/contact/', ContactMessageView.as_view(), name='contact-message'),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )