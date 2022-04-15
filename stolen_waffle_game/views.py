from django.shortcuts import render
from django.http import JsonResponse

from stolen_waffle_game.models import Puzzle


# Create your views here.
def index(request):
    return render(request, 'stolen_waffle_game/index.html', {})


def puzzle(request):
    # This is known to be slow with lots of records, but waffles will only be a couple hundred
    p = Puzzle.objects.order_by('?').first()
    return JsonResponse(
        p.secret_code
        , safe=False
    )
