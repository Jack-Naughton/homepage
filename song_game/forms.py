from django import forms

from song_game.models import Playlist


class PlaylistForm(forms.ModelForm):
    class Meta:
        fields = ['name']
        model = Playlist

    def save(self, commit=True):
        """Overwritten to add user"""
        instance = super().save(False)
        instance.user = self.request.user
        instance.save()
        return instance

    def __init__(self, *args, **kwargs):
        # pop the request out which was inserted in PlaylistView
        self.request = kwargs.pop('request')
        super().__init__(*args, **kwargs)
