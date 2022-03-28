from django.views.generic import ListView


class MyPlaylists(ListView):
    template_name = 'my_playlists.html'
