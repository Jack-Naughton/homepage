from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User


class SignupForm(UserCreationForm):
    email = forms.EmailField(
        help_text='Needed for password reset. Or just make one up ¯\_(ツ)_/¯'
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
