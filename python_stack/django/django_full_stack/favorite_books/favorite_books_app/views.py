from django.shortcuts import render, redirect
from .models import User, Book

def homepage(request):

    return render(request, 'registration_page.html')

def registration(request):
    registered_user = User.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        email = request.POST['email'],
        password = request.POST['password']
    )

    request.session['user_id']= registered_user.id
    return redirect("/books")

def mainpage(request):
    logged_user = User.objects.get(id = request.session['user_id'])
    books = Book.objects.all()

    context = {

        'logged_user': logged_user,
        'books': Book.objects.all(),
        #'users_liked': user_liked

    }
    return render(request, 'mainpage.html', context)

def addbook(request):
    uploaded_by = User.objects.get(id = request.session['user_id'])
    uploaded_book = Book.objects.create(
        title = request.POST['title'],
        desc= request.POST['desc'],
        uploaded_by = uploaded_by,
    )
    uploaded_book.users_who_like.add(uploaded_by)

    return redirect("/books")    

def option(request, book_id):
    if 'user_id' in request.session:
        return redirect("/books/"f"{book_id}""/edit")
    else:
        return redirect("")

def bookpage(request, book_id):
    book = Book.objects.get(id = book_id)
    user = User.objects.get(id = request.session['user_id'])
    context = {
        'book': book,
        'user': user,
    }
    return render(request, 'user_uploaded.html', context)

def editbook(request, book_id):
    book_edit = Book.objects.get(id = book_id)
    book_edit.title = request.POST['title']
    book_edit.desc = request.POST['desc'] 
    book_edit.save()
    return redirect(request.META.get('HTTP_REFERER'))

