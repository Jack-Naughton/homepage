from django.contrib import admin
from .models import HorseFact


# Register your models here.
@admin.register(HorseFact)
class HorseFactAdmin(admin.ModelAdmin):
    search_fields = ['fact']
