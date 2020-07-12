from django.shortcuts import render, redirect
from .models import User
def index(request):
    context = {
        'user': User.objects.all()
    }
 
    return render(request, 'index.html', context)

def processform(request):
    User.objects.create(
    first_name = request.POST['firstname'], 
    last_name = request.POST['lastname'],
    email = request.POST['email'], 
    age = request.POST['age'],
    )
    return redirect("/")


# Create your views here.
