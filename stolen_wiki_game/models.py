from django.db import models


# Create your models here.
class Article(models.Model):
    slug = models.CharField()

    def __str__(self):
        return self.slug
