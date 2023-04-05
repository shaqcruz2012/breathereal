from django.urls import path
from . import views

urlpattern = [
    path('', views.send_the_homepage)
]