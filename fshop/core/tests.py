from django.test import TestCase
from .models import Product, Category

# Create your tests here.
class CategoryModelTests(TestCase):
    """
    Test Category model
    """

    def setUp(self):
        """
        setup initial data
        """
        c1 = Category.objects.create(name="testCategory")
        c2 = Category.objects.create(name="testCategory2", parent=c1)
        c3 = Category.objects.create(name="testCategory3", parent=c1)
        c4 = Category.objects.create(name="testCategory4", parent=c1)

   
    def test_if_saved_successfully(self):
        """
        test if category can be saved successfully
        """
        c1 = Category.objects.get(name="testCategory")
        children_count = c1.category_set.count()
        self.assertEqual(children_count, 3)

