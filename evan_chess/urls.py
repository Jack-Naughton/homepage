from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('answer/', views.answer, name='answer'),
    path('img/chesspieces/wikipedia/<str:file_name>', views.chess_piece, name='chess_piece'),
]
