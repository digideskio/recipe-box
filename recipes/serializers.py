from rest_framework import serializers
from . import models

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ingredient
        fields = (
            'id',
            'name',
            'quantity',
            'preparation',
        )

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = (
            'id',
            'name',
        )

class RecipeSerializer(serializers.ModelSerializer):

    ingredients = IngredientSerializer(source='ingredient_set', many=True)
    tags = TagSerializer(many=True)

    def create(self, validated_data):

        # Create Recipe without ingredients or tags
        ingredients_data = validated_data.pop('ingredient_set')
        tags_data = validated_data.pop('tags')
        recipe = models.Recipe.objects.create(**validated_data)

        # Create ingredients
        for ingredient in ingredients_data:
            models.Ingredient.objects.create(**ingredient, recipe=recipe)

        # Get or create tags, add to recipe
        for tag in tags_data:
            tag, created = models.Tag.objects.get_or_create(name=tag['name'])
            recipe.tags.add(tag)

        return recipe

    # Todo: Add UPDATE method

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
            'ingredients',
            'notes',
            'tags',
        )