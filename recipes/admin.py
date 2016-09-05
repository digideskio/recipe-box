from django.contrib import admin
from . import models

class IngredientInline(admin.StackedInline):
    fields = (
        'quantity',
        'name',
        'preparation'
    )
    model = models.Ingredient

class RecipeAdmin(admin.ModelAdmin):
    fields = (
        'title',
        'description',
        'yields',
        'prep_time',
        'cooking_time',
        'instructions',
        'serve_with',
        'notes',
        'tags'
    )
    inlines = [IngredientInline]

# Register your models here.
admin.site.register(models.Recipe, RecipeAdmin)
admin.site.register(models.Tag)
admin.site.register(models.Ingredient)
