from django.urls import path
from . import views
urlpatterns = [
    path('', views.homepage),
    path('registration', views.registration),
    path('books', views.mainpage),
    path('books/addbook', views.addbook),
    path('books/<int:book_id>', views.option),
    path('books/<int:book_id>/edit', views.editbook)
]