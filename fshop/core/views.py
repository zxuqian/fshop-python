from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from core.models import Product, Category
from core.serializers import ProductSerializer, CategorySerializer

# Create your views here.

@api_view(['GET'])
def initialize_data(request):
    """
    Initialize some test data
    """
    pass

class ProductViewSet(viewsets.ModelViewSet):
    """
    Product view set
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    """
    Category view set
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer