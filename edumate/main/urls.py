from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('attendence', views.attendence, name='attendence'),
    path('assignment', views.assignment, name='assignment'),
    path('chat', views.chat, name='chat'),
    path('index', views.index, name='index'),
    path('studentprofiles', views.studentprofiles, name='studentprofiles'),
]