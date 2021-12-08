from django.db import models


# Create your models here.
class CoworkerStatement(models.Model):
    statement = models.TextField(max_length=65535)

    def __str__(self):
        return self.statement

    class Meta:
        db_table = 'coworker_statements'
