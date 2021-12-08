from django.db import models


# Create your models here.
class CoworkerStatement(models.Model):
    statement = models.CharField(max_length=255)

    class Meta:
        db_table = 'coworker_statements'