#This is the Mapex App URL Configuration
from django.urls import path
from mapex import views

# Define namespace for the app - template tagging 
app_name = 'mapex'


urlpatterns = [
      path('', views.index, name='index'),
      path('map/', views.index, name='index'),
      path('map/about/', views.relative, name='relative'),
      path('map/contact/', views.other_view, name='other_view')
]

