import graphene
# from graphene_django import DjangoObjectType


# from products.models import Category, Product
from products.schema import Query as ProductQuery

# from products.schema import Query


class Query(ProductQuery, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = graphene.Schema(query=Query)
