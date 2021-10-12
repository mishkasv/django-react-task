from django.db import models
from django.utils import timezone


class SimpleUser(models.Model):
    username = models.CharField(max_length=30, unique=True)
    created = models.DateTimeField(default=timezone.now)
    groups = models.ManyToManyField('Group', related_name='users',null=True, blank=True)

class Group(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField(null=False)

    def __str__(self):
        return self.name


# Create your models here.
