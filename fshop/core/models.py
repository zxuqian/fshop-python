from django.db import models

# Create your models here.
class Product(models.Model):
    """
    Product Model
    """
    title = models.CharField(max_length=100, blank=False)
    categories = models.ManyToManyField('Category', related_name='products')
    price = models.DecimalField(max_digits=15, decimal_places=2)
    count = models.IntegerField(default=0)
    description = models.CharField(max_length=255)
    details = models.TextField()
    photo = models.ImageField(upload_to='uploads/%Y/%m/%d/', null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('created', )

class Category(models.Model):
    """
    Category Model
    """
    name = models.CharField(max_length=100, blank=False)
    slug = models.CharField(max_length=100, blank=True, default='')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name