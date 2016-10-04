from django.shortcuts import render

from django.db.models.functions import Lower

from rest_framework import viewsets, generics

from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers

def index(request):
    return render(request, 'index.html')

# API
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = models.Recipe.objects.all()
    serializer_class = serializers.RecipeSerializer

class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Tag.objects.all().order_by(Lower('name'))
    serializer_class = serializers.TagSerializer

class SearchView(generics.ListAPIView):
    serializer_class = serializers.RecipeSerializer

    def get_queryset(self):
        parameter = self.request.GET.get('q', default='')
        return models.Recipe.objects.filter(title__contains=parameter)

class ByTagView(generics.ListAPIView):
    serializer_class = serializers.RecipeSerializer

    def get_queryset(self):
        tag_id = self.request.GET.get('id', default='')
        return models.Tag.objects.get(pk=tag_id).recipe_set.all()

    def list(self, request):
        tag_id = request.GET.get('id', default='')
        queryset = self.get_queryset()
        serializer = serializers.RecipeSerializer(queryset, many=True)
        response_data = {
            'tag_name': models.Tag.objects.get(pk=tag_id).name,
            'recipes': serializer.data
        }
        return Response(response_data)