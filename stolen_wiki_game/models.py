from django.db import models


# Create your models here.
class Article(models.Model):
    slug = models.CharField(max_length=255)

    def __str__(self):
        return self.slug
