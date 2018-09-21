from rest_framework import serializers
from core.models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    """
    Product Serializer
    """
    # categories = serializers.PrimaryKeyRelatedField
    class Meta:
        model = Product
        fields = ('id', 'title', 'categories', 'price', 'count', 'description', 'details', 'photo')

class CategorySerializer(serializers.ModelSerializer):
    """
    Category Serializer
    """
    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'parent', 'products')

