# App Urls =>
# Path: navel/app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.user_sign_up, name='signup'),
    path('login/', views.user_log_in, name= 'signin'),
    path('search/', views.user_log_in, name= 'search'),
    path('curruser/', views.curr_user, name= 'curruser'),
    path('logout/', views.user_log_out, name= 'signout'),
    path('', views.send_the_index, name='index')
]