from django.db import models
import re
class UserManager(models.Manager):
    def validations(self, post_data):
        errors ={}

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):
             errors['email'] = "Invalid email address!"

        if len(post_data['first_name']) < 2:
            errors['first_name'] = 'First name must be at least two characters long'
        if post_data['first_name'].isalpha() == False:
            errors['first_name'] = 'First name must be letters only'

        if len(post_data['last_name']) < 2:
            errors['last_name'] = 'Last name must be at least two characters long'
        if post_data['last_name'].isalpha() == False:
            errors['last_name'] = 'Last name must be letters only'

        if len(post_data['password']) < 8:
            errors['first_name'] = 'Password name must be at least 8 characters long'    

        if post_data['pw_confirmation'] != post_data['password']:
            errors['pw_confirmation'] = 'Password confirmation failed' 

        return errors




class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()


# Create your models here.
