from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# takes request -> returns response
# it is a request handler, in some languages it is called an action



def say_hello(request):
    return render(request, 'hello.html', {'name': 'David'})