from django.urls import path
from . import views
urlpatterns = [
    path('', views.root),
    path('shows', views.show),
    path('shows/new', views.addshowpage),
    path('shows/processform', views.process_form),
    path('shows/<int:added_show_id>', views.showpage),
    path('shows/<int:added_show_id>/delete', views.delete_show),
    path('shows/<int:added_show_id>/edit', views.edit_show_page),
    path('shows/<int:added_show_id>/process', views.process_edit)
]