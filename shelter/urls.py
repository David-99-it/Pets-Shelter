from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnimalViewSet, AdoptionViewSet

router = DefaultRouter()
router.register('animals', AnimalViewSet)
router.register('adoptions', AdoptionViewSet)

urlpatterns = router.urls
