from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def token(request):
    return render(request, "inputtoken.html" )

def login(request):
    return render(request, "login.html")

def register(request):
    return render(request, "register.html")

def profile(request):
    return render(request, "profile.html")
# Create your views here.
