from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *

class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer
    filterset_fields = ['type']

class AdoptionViewSet(viewsets.ModelViewSet):
    serializer_class = AdoptionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return AdoptionRequest.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

