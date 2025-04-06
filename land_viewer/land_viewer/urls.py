"""
URL configuration for land_viewer project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from mapex import views

#mapping the mapex url 

urlpatterns = [
    path('admin/', admin.site.urls),              #/admin root - to log in as admin 
    path('', views.index, name= 'index'),         #root (http://127.0.0.1:8000/) - linked to index.html 
    path('', include('mapex.urls')),         #/map - view  
]
