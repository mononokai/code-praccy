from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


def index(request):
    # Check for login
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        # Authenticate
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "You have been logged in.")
            return redirect('index')
        else:
            messages.success(request, "There was an error logging in, please try again.")
            return redirect('index')
    else:
        return render(request, 'index.html')


def logout_user(request):
    messages.success(request, "You have been logged out.")
    logout(request)
    return redirect('index')