from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)
    

def processform(request): 
    
    quantity_from_form = int(request.POST["quantity"])
    price_from_form = float(request.POST["price"])
    total_charge = quantity_from_form * price_from_form
    print("Charging credit card...")
    order =  Order.objects.create(
    quantity_ordered=quantity_from_form, 
    total_price=total_charge)
    request.session['item_price'] = price_from_form
    return redirect("/checkout")

def checkout(request):
    orders= Order.objects.all()
    total = 0
    items = 0
    for order in orders:
        total += order.total_price
        items += order.quantity_ordered
    context = {
    'amadon_total': total,
    'total_items': items
    }
    
    return render(request, "store/checkout.html", context)