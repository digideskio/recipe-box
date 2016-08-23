from django.db import models

class CategoryType(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "category types"
    
    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255)
    category_type = models.ForeignKey(CategoryType)

    class Meta:
        verbose_name_plural = "categories"
    
    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    yields = models.CharField(max_length=255)
    instructions = models.TextField()
    serve_with = models.CharField(max_length=255)
    prep_time = models.DurationField()
    cooking_time = models.DurationField()
    ingredients = models.ManyToManyField(Ingredient, through='RecipeIngredient')
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.title


class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.DecimalField(decimal_places=10, max_digits=10)
    unit = models.CharField(max_length=255)
    preparation = models.CharField(max_length=255)