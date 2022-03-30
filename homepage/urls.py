"""homepage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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

urlpatterns = [
    # my urls
    path('', include('resume.urls')),
    path('resume/', include('resume.urls')),
    path('horsefacts/', include('horsefacts.urls')),
    path('coworker_statements/', include('lauren_coworker_bot.urls')),
    path('stolen_word_game/', include('stolen_wordle.urls')),
    path('stolen_song_game/', include('stolen_herdle.urls')),
    path('accounts/', include('accounts.urls')),
    path('face_the_music/', include('song_game.urls')),
    path('evan_chess/', include('evan_chess.urls')),
    path("__reload__/", include("django_browser_reload.urls")),

    # django urls
    path('accounts/', include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
]

