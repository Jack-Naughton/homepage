from django.db import models


# Create your models here.
class CoworkerStatement(models.Model):
    statement = models.TextField(max_length=65535)

    class Meta:
        db_table = 'coworker_statements'