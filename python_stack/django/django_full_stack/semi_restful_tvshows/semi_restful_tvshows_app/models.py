from django.db import models

class ShowsManager(models.Manager):
    def validations(self, post_data):
        errors = {}

        if len(post_data["title"]) < 2:
            errors['title'] = "Title should be at least 2 characters long"

        if len(post_data["network"]) < 3:
            errors['network'] = "Network should be at least 3 characters long"

        if len(post_data["description"]) < 10:
            errors['description'] = "Description should be at least 10 characters long"
        
        return errors

class Shows(models.Model):
    title = models.CharField(max_length=50)
    network = models.CharField(max_length=50)
    release_date = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowsManager()


# Create your models here.
