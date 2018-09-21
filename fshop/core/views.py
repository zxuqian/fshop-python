from django.shortcuts import render
from rest_framework import viewsets
from core.models import Product, Category
from core.serializers import ProductSerializer, CategorySerializer

# Create your views here.
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