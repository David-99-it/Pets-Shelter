from rest_framework import viewsets, permissions
from django.shortcuts import render, get_object_or_404
from .models import Animal, AdoptionRequest
from .serializers import AnimalSerializer, AdoptionSerializer
from django.core.paginator import Paginator


def animal_detail(request, pk):
    animal = get_object_or_404(Animal, pk=pk)
    return render(request, 'shelter/animal_detail.html', {
        'animal': animal
    })

def contact(request):
    return render(request, 'shelter/contact.html')

def animals_list(request):
    animals = Animal.objects.all()
    return render(request, 'shelter/animals_list.html', {'animals': animals})

    # Фильтры
    animal_type = request.GET.get('animal_type', '')
    age = request.GET.get('age', '')
    status = request.GET.get('status', '')

    if animal_type:
        queryset = queryset.filter(type=animal_type)
    if age:
        if age == 'young':
            queryset = queryset.filter(age__lt=1)
        elif age == 'adult':
            queryset = queryset.filter(age__gte=1, age__lte=7)
        elif age == 'senior':
            queryset = queryset.filter(age__gt=7)
    if status:
        queryset = queryset.filter(status=status)

    # Пагинация
    paginator = Paginator(queryset, 12)  # 12 животных на страницу
    page_number = request.GET.get('page')
    animals = paginator.get_page(page_number)

    context = {
        'animals': animals,
        'animal_type': animal_type,
        'age': age,
        'status': status,
        'search_query': request.GET.get('q', ''),
    }

    return render(request, 'shelter/animals_list.html', context)

class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer
    filterset_fields = ['type']


class AdoptionViewSet(viewsets.ModelViewSet):
    queryset = AdoptionRequest.objects.all()
    serializer_class = AdoptionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return AdoptionRequest.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
