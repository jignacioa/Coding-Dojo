from django.db import models

class UserManager(models.Manager):
    def validations(self, data):
        errors = {}
        return errors

class BookManager(models.Manager):
     def validations(self, data):
        errors = {}
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email=models.CharField(max_length=60)
    password = models.CharField(max_length=60)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()


class Book(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    uploaded_by = models.ForeignKey(User, related_name ='books_uploaded', on_delete = models.CASCADE)
    users_who_like = models.ManyToManyField(User, related_name="liked_books")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = BookManager()
# Create your models here.
