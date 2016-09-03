from rest_framework import serializers
from . import models

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ingredient
        fields = (
            'id',
            'recipe',
            'quantity',
            'unit',
            'preparation'
        )

class RecipeSerializer(serializers.ModelSerializer):

    ingredients = IngredientSerializer(source='ingredient_set', many=True)

    def create(self, validated_data):

        # Create Recipe without ingredients
        ingredients_data = validated_data.pop('ingredients')
        recipe = Recipe.objects.create(**validated_data)

        # Create ingredients that do not already exist
        for ingredient in ingredients_data:
            ingredient, created = Ingredient.objects.get_or_create(name=ingredient['name'])

        # Create RecipeIngredient relationships
            # recipe.ingredients.add(ingredient)
        return recipe

    # Add UPDATE method

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