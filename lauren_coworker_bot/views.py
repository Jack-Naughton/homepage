from django.http import JsonResponse
from .models import CoworkerStatement


# Create your views here.
def random(request):
    # This is known to be slow with lots of records, but there won't be many statements
    statement = CoworkerStatement.objects.order_by('?').first()
    return JsonResponse({'response_type': 'in_channel', 'text': statement.statement})
