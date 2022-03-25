from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django import forms
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


class SignupForm(UserCreationForm):
    email = forms.EmailField(
        help_text='Not required, but needed for password reset ¯\_(ツ)_/¯',
        required=False
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class MyAuthenticationForm(AuthenticationForm):
    error_messages = {
        "invalid_login": _('Incorrect username and/or password'),
        "inactive": _("This account is inactive."),
    }
