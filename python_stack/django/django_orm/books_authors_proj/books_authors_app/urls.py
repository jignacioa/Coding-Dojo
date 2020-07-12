from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('books/<int:book_id>', views.books),
    path('books/<int:book_id>/addcontributor', views.addcontributor),
    path('addbook', views.addbook),
    path('authors', views.mainauthors),
    path('authors/addauthor', views.addauthor),
    path('authors/<int:author_id>', views.authors),
    path('authors/<int:author_id>/addpublication', views.addpublication)
]