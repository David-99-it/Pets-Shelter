from rest_framework import serializers
from .models import Animal, AdoptionRequest

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = '__all__'

class AdoptionSerializer(serializers.ModelSerializer):
    animal_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = AdoptionRequest
        fields = ['id', 'animal_id', 'message', 'status']

    def create(self, validated_data):
        animal_id = validated_data.pop('animal_id')
        animal = Animal.objects.get(id=animal_id)
        user = self.context['request'].user
        adoption = AdoptionRequest.objects.create(user=user, animal=animal, **validated_data)
        return adoption
