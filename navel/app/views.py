from django.shortcuts import render
from django.http import HttpResponse

# The .read and open() is funky
def send_the_homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)