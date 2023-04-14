# SC 4/13/2023 11:47 AM
PROJECT-003 Create User Authentication Functionality
  Still following: 
  - Netanel's Step-by-Step
  - Francisco's W9D4 Lecture
  - Building based on Models and desired features

So far 
- Built out the wireframe and DB using Figma and drawSQL
- we've added React, Django, and Postgresql scaffoldings
- Models and Migrations are updated
- updated the settings.py Database object

[x]Goal today is to do the following:
- Link views to models and httprequests
  Import from.models *modelname* as *whatever you want )*
- $pip install djangorestframework
- Add the following import to views
    from django.contrib.auth import authenticate,login,logout
    from rest_framework.decorators import api_view
    INSTALLED_APPS = ['rest_framework]
- (if this line isn’t showing up check the correct python interpreter is being selected by vs code)
- If everything is good you should be able to $ npm run build in the front end to have assets populate in django

- Today I updated the models.py scrapping the CustomUser(AbstractUser) for App_User(AbstractUser) that Francisco has in W9D4 . 
- I didn't need the Kanye field, instead I'll create a bot class  

Serene Help:
  .env can look diff ways
    in .env each line, export <VARNAME>='thevalueofvar'
  once .env is saved, app does not load (unless direnv or similar) .env. Can automate in long term
  before starting app, 
    source path/to/.env
    loads environemnt vars you put in .env file into env of terminal
    when application is ran, can load in the variables from environment 
    venv is python
    terminal environment

  use env variables before going live
    settings.py
    database variables should live in .env and have 
      export <>
  source .env vs loaddotenv()

  OAUTH for Spotify 
    Can create local user account on application that is tied to user spotify
  [] Django OAuth Libary exists
  
# Explaining Views from Francisco W9D4
user_sign_up: 
- This view function handles user sign-up functionality. 
- It expects a POST request and retrieves the email, password, and name from the request data. 
- It then creates a new App_User model object with the provided information and saves it to the database. 
- It returns a JSON response indicating whether the sign-up was successful or not.

user_log_in: 
- This view function handles user login functionality. 
- It expects a POST request and retrieves the email and password from the request data. 
- It uses Django's authenticate function to check if the provided email and password match a user in the database. 
- If a valid user is found, it creates a session ID for the user and returns a JSON response with the user's email and name.

curr_user: 
- This view function returns information about the currently logged-in user.
- It expects a GET request and checks if the user is authenticated.
- If the user is authenticated, it serializes the user object to JSON and returns a JSON response with the user's name and email.

user_log_out: 
- This view function handles user logout functionality. 
- It expects a POST request and removes the session ID for the current user. 
- It returns a JSON response indicating whether the logout was successful or not.

send_the_index: 
- This view function returns the contents of an HTML file named index.html located in the static directory. 
- It is typically used to serve the index file for a React project.

Note: The code uses @api_view decorator from Django REST framework, which allows defining views that can handle different HTTP methods (e.g., POST, GET) in a single view function. 
- The specific HTTP methods that each view function can handle are specified using the list of method names as arguments to @api_view decorator (e.g., @api_view(["POST"]) specifies that the view function can handle POST requests).