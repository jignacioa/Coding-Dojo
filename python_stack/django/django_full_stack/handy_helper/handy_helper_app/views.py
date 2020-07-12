from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from .models import User, Job
def mainpage(request):
    return render(request,'welcome.html')

def registration(request):
    errors = User.objects.validations(request.POST)
    if len(errors) > 0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect('/')    

    potential_registration = User.objects.filter(email_name=request.POST['email'])
    if len(potential_registration) > 0:
        messages.error(request, "Email already in use")
        return redirect("/")

    
    hashed_pw = bcrypt.hashpw(request.POST['password'].encode(),bcrypt.gensalt()).decode()
    
    created_user = User.objects.create(
    first_name = request.POST['first_name'],
    last_name = request.POST['last_name'],
    email_name = request.POST['email'],
    password = hashed_pw
    )

    request.session['user_id'] = created_user.id
    return redirect('/dashboard')

def login(request):
    potential_login = User.objects.filter(email_name=request.POST['email'])
    
    if len(potential_login) == 0:
        messages.error(request, "Please check email and password")
        return redirect("/")

    if not bcrypt.checkpw(request.POST['password'].encode(), potential_login[0].password.encode()):
        messages.error(request, "Please check email and password")
        return redirect('/')

    request.session['user_id'] = potential_login[0].id

    return redirect("/dashboard")    

def logout(request):
    request.session.pop('user_id')    
    return redirect('/')

def dashboard(request):
    if 'user_id' not in request.session:
        return redirect("/")
    logged_user = User.objects.get(id =request.session['user_id'])

    context = {
        'logged_user': logged_user, 
        'jobs': Job.objects.all()
    }
    return render(request, 'dashboard.html', context)   

def remove(request, job_id):
    if 'user_id' not in request.session:
        return redirect("/")
    removed_job = Job.objects.get(id =job_id)
    removed_job.delete()
    return redirect(request.META.get('HTTP_REFERER'))


def newjobpage(request):
    if 'user_id' not in request.session:
        return redirect("/")
    logged_user = User.objects.get(id =request.session['user_id'])

    context = {
        'logged_user': logged_user 
    }

    return render(request, 'newjob.html', context)

def createjob(request):
    if 'user_id' not in request.session:
        return redirect("/")
    errors = Job.objects.validations(request.POST)
    if len(errors) > 0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect(request.META.get('HTTP_REFERER'))    
    logged_user = User.objects.get(id =request.session['user_id'])
    created_job = Job.objects.create(
        title = request.POST['title'],
        location = request.POST['location'],
        description = request.POST['description'],
        created_by = logged_user
    )
    created_job.performed_by.add(logged_user)

    return redirect('/dashboard')

def jobdetails(request, job_id):
    if 'user_id' not in request.session:
        return redirect("/")
    user = User.objects.get(id =request.session['user_id'])
    job = Job.objects.get(id = job_id)
    context = {
        'job': job,
        'user': user
    }
    return render(request, 'jobdetails.html', context)

def editpage(request, job_id):
    if 'user_id' not in request.session:
        return redirect("/")
      
    user = User.objects.get(id =request.session['user_id'])
    job = Job.objects.get(id = job_id)
    context = {
        'job': job,
        'user': user
    }
    return render(request,'editpage.html', context)

def processsubmission(request, job_id):
    if 'user_id' not in request.session:
        return redirect("/")
    errors = Job.objects.validations(request.POST)
    if len(errors) > 0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect(request.META.get('HTTP_REFERER'))      
    job_to_edit = Job.objects.get(id = job_id)
    job_to_edit.title = request.POST['title']
    job_to_edit.description = request.POST['description']
    job_to_edit.location = request.POST['location']
    job_to_edit.save()
    return redirect("/dashboard")

# Create your views here.
