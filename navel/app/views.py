"""_summary_
    used Franciscos boilerplate from W9D4 
"""

from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
# from .models import App_User, serializer
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import APIView
from . serializer import *
from app.models import Post
# from rest_framework import serializers
# from .models import *
# from django.core.serializers import serialize
#

import json

class ReactView(APIView):
    def get(self, request):
        output = [{"email": output.email,
                "name":output.name}
                for output in React.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = ReactSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)
    # we have saved the data by passing the data to react serializer method.
    # we have to return the data to the user.

@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    # staff looks unneccesary? 
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    try:
        # creates new user
        new_user = App_User.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})


@api_view(["POST"])
def user_log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email , password = password)
    if user is not None and user.is_active:
        try:
            # Creates SessionID
            login(request._request, user)
            return JsonResponse({'email': user.email, 'name':user.name})
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    return JsonResponse({'login':False})


@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        #                    format       query                     options
        user_info = serialize("json",  [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})
    
    
@api_view(['POST'])
def user_log_out(request):
    try:
        # Removes SessionID
        logout(request)
        return JsonResponse({"logout":True})
    except Exception as e:
        print(e)
        return JsonResponse({"logout":False})
    
    
def send_the_index(request):
    # returns the index from React Project
    the_index = open('static/index.html')
    return HttpResponse(the_index)

@api_view(['POST'])
def posts(request):
    content = request.data['content']
    new_post = Post.objects.create(content = content, user = request.user, location = "Chicago, IL")
    new_post.save() 
    return JsonResponse({"success":True})