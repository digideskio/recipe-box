from django.db import models

class Tag(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    yields = models.CharField(blank=True, max_length=255)
    instructions = models.TextField()
    serve_with = models.CharField(blank=True, max_length=255)
    prep_time = models.DurationField(blank=True, null=True)
    cooking_time = models.DurationField(blank=True, null=True)
    notes = models.TextField(blank=True)
    tags = models.ManyToManyField(Tag, blank=True, null=True)

    def __str__(self):
        return self.title

class Ingredient(models.Model):
    quantity = models.CharField(blank=True, max_length=255)
    name = models.CharField(max_length=255)
    preparation = models.CharField(blank=True, max_length=255)
    recipe = models.ForeignKey(Recipe, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name