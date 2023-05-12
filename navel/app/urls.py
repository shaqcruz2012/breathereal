# App Urls =>
# Path: navel/app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/v1/user/signup/', views.user_sign_up, name='signup'),
    path('api/v1/user/login/', views.user_log_in, name= 'signin'),
    path('api/v1/search/', views.user_log_in, name= 'search'),
    path('api/v1/user/curruser/', views.curr_user, name= 'curruser'),
    path('api/v1/user/logout/', views.user_log_out, name= 'signout'),
    path('api/v1/user/delete/', views.user_delete_account, name= 'delete'),
    path('api/v1/posts/', views.posts, name= 'posts'),
    path('api/v1/spotify/tracks/', views.getTracks, name= 'gettracks'),
    path('', views.send_the_index, name='index')
]