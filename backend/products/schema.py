from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import Category, Product


# Graphene will automatically map the Category model's fields onto the CategoryNode.
# This is configured in the CategoryNode's Meta class (as you can see below)
class CategoryNode(DjangoObjectType):
    class Meta:
        model = Category
        filter_fields = ['name', 'products']
        interfaces = (relay.Node, )


class ProductNode(DjangoObjectType):
    class Meta:
        model = Product
        # Allow for some more advanced filtering here
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
            'description': ['exact', 'icontains'],
            'category': ['exact'],
            'category__name': ['exact'],
        }
        interfaces = (relay.Node, )


class Query(ObjectType):
    category = relay.Node.Field(CategoryNode)
    all_categories = DjangoFilterConnectionField(CategoryNode)

    ingredient = relay.Node.Field(ProductNode)
    all_ingredients = DjangoFilterConnectionField(ProductNode)
