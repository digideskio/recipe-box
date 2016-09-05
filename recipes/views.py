from django.shortcuts import render

from rest_framework import viewsets
from . import models
from . import serializers

def index(request):
    return render(request, 'index.html')

# API
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = models.Recipe.objects.all();
    serializer_class = serializers.RecipeSerializer
