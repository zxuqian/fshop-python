from django.db import models

# Create your models here.
class Product(models.Model):
    """
    Product Model
    """
    title = models.CharField(max_length=100, blank=False)
    price = models.DecimalField(max_digits=15, decimal_places=2)
    count = models.IntegerField(default=0);
    description = models.CharField(max_length=255)
    details = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created', )

class Category(models.Model):
    """
    Category Model
    """
    name = models.CharField(max_length=100, blank=False)
    slug = models.CharField(max_length=100, blank=True, default='')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True)