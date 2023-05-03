from django.shortcuts import render, redirect
from .models import BlogPost
from .forms import PostForm


# Home page
def index(request):
    posts = BlogPost.objects.order_by('date_added')
    context = {'posts': posts}
    return render(request, 'index.html', context) 


# Create a new post
def new_post(request):
    if request.method != 'POST':
        form = PostForm
    else:
        form = PostForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('blogs:index')
    
    context = {'form': form}
    return render(request, 'new_post.html', context)