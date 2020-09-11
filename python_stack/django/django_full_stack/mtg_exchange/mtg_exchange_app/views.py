from django.shortcuts import render, redirect
from .models import User, Product, Comment, Condition, Order, Pool, Address, Order, Card, Item
import bcrypt
#import Card
from django.contrib import messages
from django.conf import settings

def home(request):

    return render(request, 'home.html')

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
    if 'items' not in request.session:
        request.session['items'] = 0 
    if 'cart' not in request.session:
        request.session['cart'] = {}
    context = {
        'products': Product.objects.all,
        'items': request.session['items'],
        'cart': request.session['cart'],
        'order_total': request.session.get('order_total'),
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

    cart = request.session['cart']
    order_total = 0
    items = 0
    item_total = 0
    for id in cart:
        product = Product.objects.get(id = id)
        quantity = int(cart.get(id).get('quantity'))
        item_total = product.price*quantity
        order_total+=item_total
        items+=quantity
        
    request.session['order_total'] = str(order_total)
    request.session['items'] = items


    return redirect(request.META.get('HTTP_REFERER'))

def cartreview(request):
   
    context = {
        'order_total': request.session.get('order_total'),
        'items': request.session.get('items'),
        'cart': request.session.get('cart')
    }
    print(request.session.get('cart'))
    
    return render(request, 'cartreview.html', context)

def checkout(request):
    context = {
        'order_total': request.session.get('order_total'),
        'items': request.session.get('items'),
        'cart': request.session.get('cart')
    }
    return render(request, 'checkout.html', context)

def process_payment(request):
    user = User.objects.get(id=request.session['user_id'])
    cart = request.session['cart']

    address = Address.objects.create(
        address = request.POST['address'],
        city = request.POST['city'],
        state = request.POST['state'],
        zip = request.POST['zip']
    )
    
    card = Card.objects.create(
        number = request.POST['number'],
        code = request.POST['code'],
        exp = request.POST['exp'],
        name = request.POST['name'],
        address = address
    )
    new_order = Order.objects.create(
        quantity_ordered= request.session['items'],
        total_price= request.session['order_total'],
        card = card,
        address = address,
        order_by = User.objects.get(id=request.session['user_id']),
    )


    for id, product_info in cart.items():
        print(id,product_info)
        card = Product.objects.get(id=id)
        new_item = Item.objects.create(
            card = card,
            quantity = product_info.get('quantity'),
            price = product_info.get('price'),
            order = new_order
        )
        new_order.order_items.add(new_item)

    request.session['neworder_id'] = new_order.id
    new_order.save()
    
    print(new_order.id)
    return redirect('/checkout/confirmation')

def confirmation(request):
    del request.session['cart']
    del request.session['neworder_id']
    del request.session['order_total'] 
    del request.session['items']
    #order = Order.objects.get(id=request.session['neworder_id'])
    #order_items = order.order_items.all()
    #print(request.session['neworder_id'])

    #context = {
        #'order_items': order_items
    #}
    return render(request, 'confirmation.html')

def done(request):
    

    return redirect('/dashboard/listings')
