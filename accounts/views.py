from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import FormView


class SignupView(FormView):
    template_name = './registration/signup.html'
    form_class = UserCreationForm

    pass
