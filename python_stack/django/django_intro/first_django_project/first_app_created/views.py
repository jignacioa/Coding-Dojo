from django.shortcuts import render
def index(request):
    context = {
        "name": "Noelle",
        "favorite_color": "turquoise",
        "pets": ["Bruce", "Fitz", "Georgie"],
    }
    return render(request, 'index.html', context)

# Create your views here.
