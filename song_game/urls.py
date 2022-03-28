from django.urls import path

from . import views

urlpatterns = [
    path("playlist/", views.PlaylistView.as_view(), name="my_playlists"),
    path("my_playlists/", views.MyPlaylistsView.as_view(), name="my_playlists"),
]
