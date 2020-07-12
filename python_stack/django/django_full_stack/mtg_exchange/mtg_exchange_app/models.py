from django.db import models
from decimal import Decimal
import re

class UserManager(models.Manager):
    def validations(self, data):
        errors ={}

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(data['email']):
             errors['email'] = "Invalid email address!"

        if len(data['first_name']) < 2:
            errors['first_name'] = 'First name must be at least two characters long'
        if data['first_name'].isalpha() == False:
            errors['first_name'] = 'First name must be letters only'

        if len(data['last_name']) < 2:
            errors['last_name'] = 'Last name must be at least two characters long'
        if data['last_name'].isalpha() == False:
            errors['last_name'] = 'Last name must be letters only'

        if len(data['password']) < 8:
            errors['password'] = 'Password name must be at least 8 characters long'    

        if data['pw_confirmation'] != data['password']:
            errors['pw_confirmation'] = 'Password confirmation failed' 

        return errors


class ProductManager(models.Manager):
    def validations(self, data):
        errors ={}

        if len(data['card_name']) < 1:
            errors['card_name'] = 'Category must be at least three characters long'
    
        if data['price'] < 0:
            errors['price'] = 'Card must have a price or be set to $0.00'
        
        if data['quantity'] < 1:
            errors['quantity'] = 'Quantity must be greater than zero'

        return errors

class CommentManager(models.Manager):
    def validations(self, data):
        errors = {}

        if len(data['body']) < 1:
            errors['body'] = 'Comment must be more than one character long.'

class User(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    password = models.CharField(max_length=60)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #products_uploaded

    objects = UserManager()

#add the conditions for the user to be able to choose from dropdown menu
class Condition(models.Model):
    category = models.CharField(max_length=60)
    desc = models.TextField()
    #products_under_condition
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class Pool(models.Model):
    title = models.CharField(max_length=60)
    release_date = models.CharField(max_length=60)


class Product(models.Model):
    card_name = models.CharField(max_length=60)
    image = models.ImageField(upload_to='product_image', blank=True)
    permanent_type = models.CharField(max_length=60)
    pool = models.ForeignKey(Pool, related_name='included_cards', on_delete = models.CASCADE)
    color = models.CharField(max_length=60)
    price = models.DecimalField(decimal_places=2, max_digits=5)
    quantity = models.IntegerField()
    description = models.TextField()
    state = models.ForeignKey(Condition, related_name="products_under_condition", on_delete=models.CASCADE)
    #state will be an instance of the condition class
    created_by = models.ForeignKey(User, related_name="posts_uploaded", on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ProductManager()


class Order(models.Model):
    quantity_ordered = models.IntegerField()
    total_price = models.DecimalField(decimal_places=2, max_digits=6)
    order_by = models.ForeignKey(User, related_name="orders_made", on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name="in_order")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    posted_by = models.ForeignKey(User, related_name = 'user_comments', on_delete=models.CASCADE)
    body = models.TextField()
    product = models.ForeignKey(Product, related_name = "inquiries", on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = CommentManager()


