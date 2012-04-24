from django.db import models
from djangotoolbox.fields import ListField

class Post(models.Model):
    _id = models.CharField(max_length=6)
    title = models.CharField(max_length=100)
    filename = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
