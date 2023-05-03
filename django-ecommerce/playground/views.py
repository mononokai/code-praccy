from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# takes request -> returns response
# it is a request handler, in some languages it is called an action


def calculate():
    x = 1
    y = 2
    return x


def say_hello(request):
    x = calculate()
    return render(request, 'hello.html', {'name': 'David'})