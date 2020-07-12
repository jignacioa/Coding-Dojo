from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.memberlogin),
    path('register', views.registration),
    path('process_registration', views.process_registration),
    path('login', views.process_login),
    path('dashboard', views.dashboard),
    path('dashboard/newproduct', views.newproduct),
    path('dashboard/newproduct/process_submission', views.process_submission),
    path('dashboard/newproduct/addimage', views.image_form),
    path('dashboard/newproduct/addimage/upload', views.process_product_image),  
    path('dashboard/listings', views.listings),
    #path('dashboard/listings/<int:product_id>/addtocart', views.addtocart),
    path('dashboard/listings/<int:product_id>', views.view_product),
    path('listings/<int:product_id>/process_comment', views.process_comment),

    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
