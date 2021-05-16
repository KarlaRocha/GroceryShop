from django.db import models

# Create your models here.
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)


    class Meta:
        verbose_name_plural = 'categories'
        

    def __str__(self) -> str:
        return self.name



class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    category = models.ForeignKey(
        Category, related_name="products", on_delete=models.CASCADE
    )
    price = models.FloatField()
    quantity = models.FloatField()
    unit_of_measure = models.CharField(max_length=100)
    expiration_date = models.DateField()
    in_stock = models.NullBooleanField()

    def __str__(self) -> str:
        return self.name
