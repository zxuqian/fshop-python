from django.shortcuts import render
from rest_framework import viewsets
from core.models import Product
from core.serializers import CoreSerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = CoreSerializer