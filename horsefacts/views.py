from django.http import HttpResponse
from horsefacts.models import HorseFact


# Create your views here.
def random(request):
    # This is known to be slow with lots of records, but horsefacts will only be a couple hundred
    horsefact = HorseFact.objects.order_by('?')[0]
    return HttpResponse(horsefact.fact)
