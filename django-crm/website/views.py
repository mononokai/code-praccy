from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import SignUpForm

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


def register_user(request):
    if request.method == 'POST':
        # Pull data from form
        form = SignUpForm(request.POST)
        # Check that form is filled out correctly
        if form.is_valid():
            # Store data from form
            form.save()
            # Authenticate and log in
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            # Log the user in with user object
            if user is not None:
                login(request, user)
                # Display success message
                messages.success(request, "You have successfully registered. Welcome!")
                # Send to home page
                return redirect('index')
            else:
                messages.success(request, "There was an error logging in, please try again.")
                print(f"user: {user}")
                print(f"username: {username}")
                print(f"password: {password}")
                return redirect('index')
    else:
        # Give an empty form
        form = SignUpForm()
        # Render register page
        return render(request, 'register.html', {'form':form})


    return render(request, 'register.html', {'form':form})