from django.shortcuts import render, HttpResponse, redirect
from .models import Book, Author

def index(request):
    context = {
        'books': Book.objects.all()
    }    
    return render(request, 'addbook.html', context)

def books(request, book_id):
    context = {
        'selected_book': Book.objects.get(id = book_id),
        'authors': Author.objects.all()
    }    
    
    return render(request, 'showbook.html', context)    

def addcontributor(request, book_id):
    author_id = request.POST["author_to_book_dropdown"]
    Book.objects.get(id = book_id).authors.add(Author.objects.get(id = author_id))

    return redirect(request.META.get('HTTP_REFERER'))

def addbook(request):
    Book.objects.create(
        title = request.POST['title'],
        desc = request.POST['description']
    )
    return redirect("/")

#def addcontributor(request)    

def mainauthors(request):
    context = {
        'authors': Author.objects.all()
    }
    return render(request, 'addauthor.html', context)

def addauthor(request):
    Author.objects.create(
        first_name = request.POST['firstname'],
        last_name = request.POST['lastname'],
        notes = request.POST['notes']
    )
    return redirect(request.META.get('HTTP_REFERER'))

def authors(request, author_id):
    context = {
    'selected_author': Author.objects.get(id = author_id),
    'books': Book.objects.all()
    }
    return render(request, 'showauthor.html', context)

def addpublication(request, author_id):
    book_id = request.POST['book_dropdown_selection']
    Author.objects.get(id = author_id).book.add(Book.objects.get(id = book_id))

    return redirect(request.META.get('HTTP_REFERER'))
# Create your views here.
