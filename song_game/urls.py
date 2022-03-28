from django.urls import path

from . import views

urlpatterns = [
    path("my_playlists/", views.MyPlaylists.as_view(), name="my_playlists"),
]
