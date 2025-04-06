from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'mapex/index.html')

def other_view(request):
    return render(request, 'mapex/other_view.html')

def relative(request):
    return render(request, 'mapex/relative_url_templates.html')