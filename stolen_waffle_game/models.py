from django.db import models


# Create your models here.
class Puzzle(models.Model):
    secret_code = models.fields.TextField(max_length=65535)
