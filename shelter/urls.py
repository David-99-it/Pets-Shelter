from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdoptionViewSet, animals_list, contact,  animal_detail

router = DefaultRouter()
router.register('adoptions', AdoptionViewSet)

urlpatterns = [
    path('', animals_list, name='animals'),  # теперь имя совпадает с шаблоном
    path('api/', include(router.urls)),
    path('animal/<int:pk>/', animal_detail, name='animal_detail'),  # страница животного,

     path('contact/', contact, name='contact'),  # страница контактов
]
