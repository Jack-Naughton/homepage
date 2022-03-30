from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from evan_chess.models import Answer


def index(request):
    return render(request, 'evan_chess/chessle.html', {})


def answer(request):
    ans = Answer.objects.order_by('?').first()
    return JsonResponse(ans.json)


def chess_piece(request, file_name):
    return redirect('https://jackli.gg/chessle/img/chesspieces/wikipedia/' + file_name)
