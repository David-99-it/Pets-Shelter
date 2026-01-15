from django.contrib import admin
from .models import Animal, AdoptionRequest, ShelterNews

# -------------------------------
# Админка для животных
# -------------------------------
@admin.register(Animal)
class AnimalAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'age', 'status')  # колонки в списке
    list_filter = ('type', 'status', 'age')          # фильтры справа
    search_fields = ('name', 'type')                 # поиск
    ordering = ('name',)                             # сортировка по имени
    fields = ('name', 'type', 'age', 'status')      # поля для редактирования

# -------------------------------
# Админка для заявок на усыновление
# -------------------------------
@admin.register(AdoptionRequest)
class AdoptionRequestAdmin(admin.ModelAdmin):
    list_display = ('user', 'animal', 'status', 'message')  # колонки в списке
    list_filter = ('status',)                               # фильтры
    search_fields = ('user__username', 'animal__name')      # поиск по пользователю и животному
    ordering = ('-status',)                                 # сортировка (на рассмотрении сверху)
    readonly_fields = ('animal', 'user')                   # нельзя менять животное или пользователя вручную

    # Автоматическое обновление статуса животного при одобрении заявки
    def save_model(self, request, obj, form, change):
        if obj.status == 'approved' and obj.animal.status != 'booked':
            obj.animal.status = 'booked'
            obj.animal.save()
        super().save_model(request, obj, form, change)

# -------------------------------
# Админка для новостей приюта
# -------------------------------
@admin.register(ShelterNews)
class ShelterNewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created')        # колонки в списке
    search_fields = ('title', 'text')          # поиск по заголовку и тексту
    ordering = ('-created',)                   # новые новости сверху
    fields = ('title', 'text')                 # поля для редактирования
