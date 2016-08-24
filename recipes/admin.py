from django.contrib import admin
from . import models

class RecipeIngredientsInline(admin.StackedInline):
    model = models.RecipeIngredient

class RecipeAdmin(admin.ModelAdmin):
    inlines = [RecipeIngredientsInline]

# Register your models here.
admin.site.register(models.Recipe, RecipeAdmin)
admin.site.register(models.Tag)
admin.site.register(models.Ingredient)
