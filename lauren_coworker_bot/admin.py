from django.contrib import admin
from .models import CoworkerStatement


# Register your models here.
@admin.register(CoworkerStatement)
class CoworkerStatementAdmin(admin.ModelAdmin):
    search_fields = ['statement']
