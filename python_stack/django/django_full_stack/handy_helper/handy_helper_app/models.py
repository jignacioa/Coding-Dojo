from django.db import models
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
            errors['first_name'] = 'Password name must be at least 8 characters long'    

        if data['pw_confirmation'] != data['password']:
            errors['pw_confirmation'] = 'Password confirmation failed' 

        return errors


class JobManager(models.Manager):
    def validations(self, data):
        errors ={}

        if len(data['title']) < 3:
            errors['title'] = 'Title must be at least three characters long'
    
        if len(data['description']) < 3:
            errors['last_name'] = 'Description must be at least three characters long'
        
        if len(data['location']) < 3:
            errors['first_name'] = 'Location must be at least three characters long'

        return errors

class User(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email_name = models.CharField(max_length=60)
    password = models.CharField(max_length=60)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()


class Job(models.Model):
    title = models.CharField(max_length=60)
    location = models.CharField(max_length=60)
    description = models.TextField()
    created_by = models.ForeignKey(User, related_name="jobs_uploaded", on_delete=models.CASCADE)
    performed_by = models.ManyToManyField(User, related_name="jobs_performed")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = JobManager()

# Create your models here.
