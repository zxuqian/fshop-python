from rest_framework import serializers
from core.models import Product

class CoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'price', 'count', 'description', 'details')