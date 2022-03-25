from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LogoutView
from django.utils.decorators import method_decorator
from django.views.generic import DetailView, CreateView

from accounts.forms import SignupForm


class SignupView(CreateView):
    template_name = 'registration/signup.html'
    form_class = SignupForm
    success_url = 'profile'


@method_decorator(login_required, name='dispatch')
class ProfileView(DetailView):
    template_name = 'accounts/profile.html'

    def get_object(self, **kwargs):
        return self.request.user


class MyLogoutView(LogoutView):
    template_name = 'accounts/logout.html'
