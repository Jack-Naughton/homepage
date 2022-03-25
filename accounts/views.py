from django.contrib.auth.forms import UserCreationForm
from django.views.generic import DetailView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy


class SignupView(CreateView):
    template_name = 'registration/signup.html'
    form_class = UserCreationForm
    success_url = reverse_lazy('login')


class ProfileView(DetailView):
    template_name = 'accounts/profile.html'

    def get_object(self, **kwargs):
        return self.request.user
