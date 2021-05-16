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


# class CategoryType(DjangoObjectType):
#     class Meta:
#         model = Category
#         fields = ("id", "name", "products")


# class ProductType(DjangoObjectType):
#     class Meta:
#         model = Product
#         fields = ("id", "name", "description", "category")


# class Query(graphene.ObjectType):
#     all_products = graphene.List(ProductType)
#     category_by_name = graphene.Field(CategoryType, name=graphene.String(required=True))

#     def resolve_all_products(root, info):
#         return Product.objects.select_related("category").all()

#     def resolve_category_by_name(root, info, name):
#         try:
#             return Category.objects.get(name=name)
#         except Category.DoesNotExist:
#             return None

# schema = graphene.Schema(query=Query)