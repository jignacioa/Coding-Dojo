from django.shortcuts import render, redirect
from .models import Dojo, Ninja

def index(request):
    context = {
        'dojos': Dojo.objects.all(),
        'ninjas': Ninja.objects.all()
    }
    return render(request, 'index.html', context)

def dojoadd(request):
    Dojo.objects.create(
    name = request.POST['dojoname'],
    city = request.POST['city'],
    state = request.POST['state']
    )    
    return redirect("/")

def addninja(request):
    Ninja.objects.create(
    first_name = request.POST['firstname'],
    last_name = request.POST['lastname'],
    dojo = Dojo.objects.get(id = request.POST['dojoselected'])
    )    
    return redirect("/")

def delete(request, id_delete):    
    Dojo.objects.get(id = id_delete).delete()
    return redirect("/")

# Create your views here.
