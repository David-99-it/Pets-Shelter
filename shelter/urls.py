from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdoptionViewSet, animals_list, contact, animal_detail

# API роутер
router = DefaultRouter()
router.register('adoptions', AdoptionViewSet)

urlpatterns = [
    # Главная страница — список питомцев
    path('', animals_list, name='animals'),

    # Страница конкретного животного
    path('animal/<int:pk>/', animal_detail, name='animal_detail'),

    # Контакты
    path('contact/', contact, name='contact'),

    # API
    path('api/', include(router.urls)),
]
