import base64

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.cache import never_cache

from stolen_wiki_game.models import Article


# Create your views here.
def index(request):
    return render(request, 'stolen_wiki_game/index.html', {})


@never_cache
def article(request):
    art = Article.objects.order_by('?').first()
    encoded = base64.b64encode(art.slug.encode('ascii')).decode('ascii')
    return JsonResponse({
        'article': encoded,
        'redactleIndex': 0,
        'token': 'abc',
        'yesterday': 'blah'
    })
