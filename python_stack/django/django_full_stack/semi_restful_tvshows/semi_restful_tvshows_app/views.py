from django.shortcuts import render, HttpResponse, redirect
from .models import Shows
from time import localtime, strftime
from django.contrib import messages

def root(request):
    return redirect('/shows')

def show(request):
    context = {
        'shows': Shows.objects.all()
    }
    return render(request, 'shows.html', context)

def addshowpage(request):
    return render(request, "add_show_form.html")

def process_form(request):
    errors = Shows.objects.validations(request.POST)
    if len(errors) > 0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect(request.META.get('HTTP_REFERER'))

    added_show = Shows.objects.create(
        title = request.POST['title'],
        network = request.POST['network'],
        release_date = request.POST['release_date'],

        desc = request.POST['description']
    )
    added_show_id = added_show.id
    return redirect('/shows/'f'{added_show_id}')

def showpage(request, added_show_id):
    show_display = Shows.objects.get(id = added_show_id)
    show_display.updated_at = show_display.updated_at.now()
    context = {
        'show': Shows.objects.get(id = added_show_id),
        'updated_time': show_display.updated_at
    }
    return render(request, 'showpage.html', context)

def delete_show(request, added_show_id):
    show_to_delete = Shows.objects.get(id=added_show_id)
    show_to_delete.delete()
    return redirect('/shows')

def edit_show_page(request, added_show_id):
    show_to_edit = Shows.objects.get(id = added_show_id)
    show_to_edit.release_date = show_to_edit.release_date.strftime("%Y-%m-%d")
    context = {
        'show_to_edit': show_to_edit,
        'input_date' : show_to_edit.release_date
    }
    
    return render(request, 'edit_show.html', context)

def process_edit(request, added_show_id):
    errors = Shows.objects.validations(request.POST)
    if len(errors) > 0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect(request.META.get('HTTP_REFERER'))
        
    show_to_edit = Shows.objects.get(id = added_show_id)
    show_to_edit.title = request.POST['title']
    show_to_edit.network = request.POST['network']
    show_to_edit.release_date = request.POST['release_date']
    show_to_edit.desc = request.POST['description']
    show_to_edit.save()
   
    return redirect('/shows/'f'{added_show_id}')