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

Goal today is to do the following:
- Link views to models and httprequests
  Import from.models *modelname* as *whatever you want )*
- $pip install django restframework
- Add the following import to views
  from django.contrib.auth import authenticate,login,logout
- from rest_framework.decorators import api_view 
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
  
