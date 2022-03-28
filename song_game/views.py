from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView

from song_game.forms import PlaylistForm
from song_game.models import Playlist


class MyPlaylistsView(ListView):
    template_name = 'my_playlists.html'
    model = Playlist


class PlaylistView(CreateView):
    template_name = 'create_playlist.html'
    model = Playlist
    form_class = PlaylistForm
    success_url = reverse_lazy('my_playlists')

    def get_form_kwargs(self):
        kw = super().get_form_kwargs()
        kw['request'] = self.request  # add request in for access in PlaylistForm
        return kw

