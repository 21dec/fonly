from django.db import models
from djangotoolbox.fields import ListField

class Post(models.Model):
    title = models.CharField(max_length=100)
    filename = models.CharField(max_length=100)
