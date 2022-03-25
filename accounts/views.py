from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LogoutView, LoginView
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import DetailView, CreateView

from accounts.forms import SignupForm, MyAuthenticationForm


class SignupView(CreateView):
    template_name = 'registration/signup.html'
    form_class = SignupForm
    success_url = reverse_lazy('profile')

    def form_valid(self, form):
        # save the new user
        to_return = super().form_valid(form)
        # authenticate newly created user
        user = authenticate(
            username=form.cleaned_data["username"],
            password=form.cleaned_data["password1"],
        )
        # log 'em in
        login(self.request, user)
        return to_return


@method_decorator(login_required, name='dispatch')
class ProfileView(DetailView):
    template_name = 'accounts/profile.html'

    def get_object(self, **kwargs):
        return self.request.user


class MyLoginView(LoginView):
    form_class = MyAuthenticationForm
    redirect_authenticated_user = True


class MyLogoutView(LogoutView):
    template_name = 'registration/logout.html'
