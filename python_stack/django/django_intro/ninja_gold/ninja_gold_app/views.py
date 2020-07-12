from django.shortcuts import render, HttpResponse, redirect
import random
import datetime
def index(request):
    if 'show_gold' not in request.session:
        request.session['show_gold'] = 0
        request.session['activities'] = []
    context = {
        'show_gold': request.session['show_gold'],
        "activities": request.session['activities']
    }
    return render(request, 'index.html', context)
# Create your views here.

def process_money(request):
    if request.POST['prize'] == "farm":
        amount = random.randint(10,20)
        request.session['show_gold'] += amount
    elif request.POST['prize'] == "cave":
        amount = random.randint(5,10)
        request.session['show_gold'] += amount
    elif request.POST['prize'] == "house":
        amount = random.randint(2,5)
        request.session['show_gold'] += amount 
    elif request.POST['prize'] == "casino":
        amount = random.randint(-50,50)
        if (amount < 0 and (request.session['show_gold'] + amount < 0)):
            request.session['show_gold'] = 0
            request.session['activities'].append({
                'timestamp': datetime.datetime.now().strftime("%c"),
                'amount': (f'You have lost {amount*-1}'),
                'location': request.POST['prize']
            })
        elif amount < 0:
            request.session['show_gold'] += amount
            request.session['activities'].append({
                'timestamp': datetime.datetime.now().strftime("%c"),
                'amount': (f'You have lost {amount*-1}'),
                'location': request.POST['prize']
            }) 
        else:
            request.session['show_gold'] += amount 
            request.session['activities'].append({
                'timestamp': datetime.datetime.now().strftime("%c"),
                'amount': (f'You have earned {amount}'),
                'location': request.POST['prize']
            })
        return redirect("/")
    request.session['activities'].append({
        'timestamp': datetime.datetime.now().strftime("%c"),
        'amount': (f'You have earned {amount}'),
        'location': request.POST['prize']
    })
    return redirect("/")    