from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User


class SignupForm(UserCreationForm):
    email = forms.EmailField(
        help_text='Not required, but needed for password reset ¯\_(ツ)_/¯',
        required=False
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
