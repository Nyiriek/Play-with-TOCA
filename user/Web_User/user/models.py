from django.db import models

class MyModel(models.Model):
    username = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField()
