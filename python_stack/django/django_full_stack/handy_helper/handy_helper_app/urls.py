from django.urls import path
from . import views

urlpatterns = [
    path('', views.mainpage),
    path('register', views.registration),
    path('dashboard', views.dashboard),
    path('jobs/new', views.newjobpage),
    path('jobs/<int:job_id>', views.jobdetails),
    path('jobs/<int:job_id>/edit', views.editpage),
    path('jobs/<int:job_id>/edit/process', views.processsubmission),
    path('jobs/new/create', views.createjob),
    path('jobs/<int:job_id>/remove', views.remove),
    path('login', views.login),
    path('logout', views.logout)
    
]