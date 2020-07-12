from django.shortcuts import render, HttpResponse, redirect
from .models import User
from django.contrib import messages
import bcrypt


def index(request):

    return render(request, 'login_registration.html')


def register(request):
    errors = User.objects.validations(request.POST)
    if len(errors) > 0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect('/')    

    potential_registration = User.objects.filter(email=request.POST['email'])
    if len(potential_registration) > 0:
        messages.error(request, "Email already in use")
        return redirect("/")

    
    hashed_pw = bcrypt.hashpw(request.POST['password'].encode(),bcrypt.gensalt()).decode()
    
    created_user = User.objects.create(
    first_name = request.POST['first_name'],
    last_name = request.POST['last_name'],
    email = request.POST['email'],
    password = hashed_pw
    )

    request.session['user_id'] = created_user.id
    return redirect('/success')


def login(request):
    potential_login = User.objects.filter(email=request.POST['email'])
    
    if len(potential_login) == 0:
        messages.error(request, "Please check email and password")
        return redirect("/")

    if not bcrypt.checkpw(request.POST['password'].encode(), potential_login[0].password.encode()):
        messages.error(request, "Please check email and password")
        return redirect('/')

    request.session['user_id'] = potential_login[0].id

    return redirect("/success")    

def success(request):
    if 'user_id' not in request.session:
        return redirect("/")

    logged_user = User.objects.get(id = request.session['user_id'])

    context = {
        'logged_user': logged_user
    }    
    return render(request, 'success.html', context)


def logout(request):
    request.session.pop('user_id')    
    return redirect ('/')
# Create your views here.
