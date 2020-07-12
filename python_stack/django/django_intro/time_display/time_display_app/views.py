from django.shortcuts import render, HttpResponse
from time import localtime, strftime

def index(request):
    context = {
        "Date": strftime("%b %d, %Y", localtime()),
        "Time": strftime("%I:%M %p", localtime()),
    }
    return render(request, 'index.html', context)

# Create your views here.
