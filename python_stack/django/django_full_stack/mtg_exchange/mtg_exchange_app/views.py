from django.shortcuts import render, redirect
from .models import User, Product, Comment, Condition, Order, Pool
import bcrypt
#import Card
from django.contrib import messages
from django.conf import settings
def memberlogin(request):

    return render(request, 'memberlogin.html')

def process_login(request):
    potential_login = User.objects.filter(email=request.POST['email'])
    
    if len(potential_login) == 0:
        messages.error(request, "Please check email and password")
        return redirect("/")

    if not bcrypt.checkpw(request.POST['password'].encode(), potential_login[0].password.encode()):
        messages.error(request, "Please check email and password")
        return redirect('/')

    request.session['user_id'] = potential_login[0].id

    return redirect("/dashboard")  

def logout(request):
    request.session.clear()
    return redirect("/")       

def registration(request):

    return render(request, 'registration.html')    

def process_registration(request):
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
    print(request.session['user_id'])
    return redirect('/dashboard')

def dashboard(request):
    logged_user = User.objects.get(id = request.session['user_id'] )    
    
    context = {
        'user': logged_user
    }
    return render(request, 'dashboard.html', context)

def newproduct(request):
    context = {
        'conditions': Condition.objects.all(),
        'pools': Pool.objects.all()
    }
    return render(request, 'newproduct_form.html', context)    

def process_submission(request):
    logged_user = User.objects.get(id = request.session['user_id'])
    new_product = Product.objects.create(
        card_name = request.POST['card_name'],
        permanent_type = request.POST['type'],
        color = request.POST['color'],
        pool = Pool.objects.get(id = request.POST['pool']),
        price = request.POST['price'],
        quantity = request.POST['quantity'],
        state = Condition.objects.get(id = request.POST['state']),
        description = request.POST['description'],
        created_by = logged_user
    ) 
    
    request.session['product_id'] = new_product.id
    return redirect('/dashboard/newproduct/addimage') #'f'{product_id}'

def image_form(request):
    
    return render(request, 'image_upload.html')

def handle_uploaded_file(f, file_name):
    with open(file_name, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

def process_product_image(request):

    product = Product.objects.get(id=request.session['product_id'])
    filename = f"product_{product.id}.jpg"

    product.image = filename
    product.save()

    handle_uploaded_file(request.FILES["product_image"], f"{settings.MEDIA_ROOT}/product_image/{filename}")

    return redirect("/dashboard/listings")    

def listings(request):
    if 'quantity' not in request.session:
        request.session['quantity'] = 0 
    context = {
        'products': Product.objects.all,
        'quantity': request.session['quantity']
    }
    return render(request, 'listings.html', context)  

def view_product(request, product_id):
    card = Product.objects.get(id = product_id)
    comments = card.inquiries.all()
    context = {
        'card': card,
        'comments': comments
    }
    return render(request, 'card.html', context)

def process_comment(request, product_id):
    poster = User.objects.get(id=request.session['user_id'])
    comment = Comment.objects.create(
        posted_by = poster,
        body = request.POST['comment'],
        product = Product.objects.get(id = product_id)
    )
    product_id = product_id

    return redirect('/dashboard/listings/'f'{product_id}')


def cart(request, product_id):
    if 'cart' not in request.session:
        request.session['cart'] = {}
    cart = request.session['cart']
    print(cart)
    product = Product.objects.get(id=product_id)
    quantity = request.POST['quantity']
    product_info = {
            'card_name': product.card_name,
            'price': str(product.price),
            'quantity': quantity
        }
    request.session['cart'][str(product_id)] = product_info
    request.session['cart'] = cart
    print(cart)
    return redirect(request.META.get('HTTP_REFERER'))

def checkout(request):
    checkout_cart = request.session['cart']
    order_total = 0
    items = 0
    print(checkout_cart)
    for id in checkout_cart:
        product = Product.objects.get(id = id)
        order_total+=product.price
        items+=product.quantity
        print(product)
    print(order_total)
    context = {
        'order_total': order_total,
        'items': items
    }

    
    return render(request, 'checkout.html', context)
