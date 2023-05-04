"""
URL Configuration for navel project.
navel/urls.py
"""
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import url
from app.views import *
def send_the_index(request):
    index = open('static/index.html')
    return HttpResponse(index)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('app.urls')),
    path('', send_the_index, name="anything") 
]
