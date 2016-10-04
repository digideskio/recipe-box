from django.db import models
from django.dispatch import receiver
from django.db.models.signals import pre_delete

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
    notes = models.TextField(blank=True, default='')
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.title

# Delete empty Tags when a Recipe is deleted
@receiver(pre_delete, sender=Recipe)
def pre_delete_recipe(sender, instance, **kwargs):
    for tag in instance.tags.all():
        if tag.recipe_set.count() == 1 and instance in tag.recipe_set.all():
            tag.delete()

class Ingredient(models.Model):
    quantity = models.CharField(blank=True, max_length=255)
    name = models.CharField(max_length=255)
    preparation = models.CharField(blank=True, max_length=255)
    recipe = models.ForeignKey(Recipe, null=True, blank=True, on_delete=models.CASCADE)
    order = models.IntegerField(null=True)

    def __str__(self):
        return self.name