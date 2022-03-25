from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('login/', views.MyLoginView.as_view(), name='login'),
    path('logout/', views.MyLogoutView.as_view(), name='logout'),
]
