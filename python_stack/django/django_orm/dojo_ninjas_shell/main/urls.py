from django.urls import path 
from . import views

urlpatterns = [
    path('', views.index),
    path('dojoadd', views.dojoadd),
    path('addninja', views.addninja),
    path('<int:id_delete>/delete', views.delete)
]

