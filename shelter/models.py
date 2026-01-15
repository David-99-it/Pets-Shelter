# shelter/models.py
from django.db import models
from django.contrib.auth.models import User

class Animal(models.Model):
    STATUS = [('free','Свободен'),('booked','Забронирован')]
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    age = models.IntegerField()
    status = models.CharField(max_length=10, choices=STATUS, default='free')

    @property
    def is_booked(self):
        return AdoptionRequest.objects.filter(animal=self, status='approved').exists()

class AdoptionRequest(models.Model):
    STATUS = [('pending','На рассмотрении'),('approved','Одобрено')]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    animal = models.OneToOneField(Animal, on_delete=models.CASCADE)
    message = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS, default='pending')

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)



class ShelterNews(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
