from rest_framework import serializers
from . import models

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Recipe
        fields = (
            'title',
            'description',
            'yields',
            'instructions',
            'serve_with',
            'prep_time',
            'cooking_time',
            'ingredients',
            'categories'
        )