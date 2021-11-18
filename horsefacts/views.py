from django.http import JsonResponse
from .models import HorseFact


# Create your views here.
def random(request):
    # This is known to be slow with lots of records, but horsefacts will only be a couple hundred
    horsefact = HorseFact.objects.order_by('?').first()
    return JsonResponse({'response_type': 'in_channel', 'text': horsefact.fact})
