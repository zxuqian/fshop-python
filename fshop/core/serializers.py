from rest_framework import serializers
from core.models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    """
    Product Serializer
    """
    class Meta:
        model = Product
        fields = ('id', 'title', 'price', 'count', 'description', 'details')

class CategorySerializer(serializers.ModelSerializer):
    """
    Category Serializer
    """
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'parent')
