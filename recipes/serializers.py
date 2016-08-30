from rest_framework import serializers
from . import models

class RecipeIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.RecipeIngredient
        fields = (
            'id',
            'recipe',
            'ingredient',
            'quantity',
            'unit',
            'preparation'
        )

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = RecipeIngredientSerializer(source='recipeingredient_set', many=True)
    class Meta:
        model = models.Recipe
        fields = (
            'id',
            'title',
            'description',
            'yields',
            'instructions',
            'serve_with',
            'prep_time',
            'cooking_time',
            'ingredients'
        )