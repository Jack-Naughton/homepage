from django.db import models


# Create your models here.
class HorseFact(models.Model):
    fact = models.CharField(max_length=255)

    class Meta:
        db_table = 'horsefacts'
