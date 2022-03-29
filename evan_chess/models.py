from django.db import models


# Create your models here.
class Answer(models.Model):
    # I could parse the object into columns
    # ... or I could be lazyyyyy
    json = models.JSONField()
