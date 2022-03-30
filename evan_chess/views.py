from django.http import JsonResponse
from django.shortcuts import render


# Create your views here.
from evan_chess.models import Answer


def index(request):
    return render(request, 'evan_chess/chessle.html', {})


def answer(request):
    ans = Answer.objects.order_by('?').first()
    return JsonResponse(ans.json)

