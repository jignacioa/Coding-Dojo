from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

def index(request):
    request.session['randomword'] = get_random_string(length=14)
    if 'count' not in request.session:
        request.session['count'] = 0
    else:
        request.session['count'] += 1
    context = {
        'word': request.session['randomword'], 
        'attempt': request.session['count']
    }

    return render(request, "index.html", context)

def random_word(request):
    return redirect("/")

def reset(request):
    del request.session['count']
    return redirect("/")


# Create your views here.
