This is a log and scratchpad for the project.

# SC 4/4/2023 6:15 PM Naming
Navel. App store search found Kiwi a similar iOS app that uses the spotify API but has users swipe on music cards.  

SC 4/5/2023 5:33 PM
- We are building the react application and serving the built react app from djangos static folder
- going to add Django REST framework to our views
  - changing default settings for csrf, automatically parse bodies as JSON
  - we are going to include CSRF tokens in AJAX requests

  # Rough Outline of building a minimal full-stack application
- create a django project
  - `python -m django startproject <project name> `
  - set up custom user model
    - what should I use? Posts Users
  - set 'AUTH_USER_MODEL' in 'settings.py'
- create a react project: 'npm create vite'
- edit 'config.json' and build the react project
  - vote needs to place static assets in a folder that django will will serve them front
  - vite needs to write urls in our index.html that our django server will recognize
  - index.html will be copied from `./index.html` to `<outDir>/index.html`
  - compiled static assets will be minified concatendated and copied from ser/ to ourdir/assets/
  - uncompiled static assets (images sounds videos) will be copied, unmodiefied from public to dist
-rebuuld project
  - we're no longer using the vite dev-server we must rebuild the project to see changes to js files
  - watch the project for changes using a watch script in package.json: "watch": vite build --watch
- add Django Rest Framework and use `@api_view()` decorators
  - changes default CSRF protection to be more reasonable Only logged-in users should need tokens
  - lets us declare which request methods a given URL can respond to
  - automatically parses the body as JSON
- store the authenticated user in React state
  - first well need need the usual signup login logout whami routes
  - request the logged in user from /whoami in a useEffect callback
- use the CSRF token to make requests to the backend
  - when using DRF, authenticated users must include a CSRF token to make requests other than GET requests
  - axios can be configured to automatically include this token in all requests

sudo service postgresql start # enter password
sudo service postgresql status # should read port 5433 online
python3 -m venv env
source env/bin/activate
pip install django
python -m django startproject navel
python manage.py startapp app
- set up settings, views, urls

npm create vite (installed vite project name frontend)

build react application so django can serve it
eefault viteconfig doesnt meet our needs, we need vite to build in a location django can find it

cd frontend
npm i (records in package json then installs module in node modules)
npm run build (creates dist (assets and everything in public folder but minified))


SC 4/5/2023 8:08 PM
Debugging 32:17 

SC 4/6/2023 10:19 PM
$ vite build
(./src/core/Core.cpp l.710): Opening the file: build
Cannot open file build
Aborted

Turned on env no result
Reinstalled Vite no result
Turned off env new error

vite v4.2.1 building for production...
✓ 0 modules transformed.
✓ built in 10ms
Could not resolve entry module "index.html".
error during build:

SC 4/6/2023 10:23 PM
Problem solved. was running the wrong command. Correct command is:
  cd frontend
  npm i (records in package json then installs module in node modules)
  npm run build (creates dist (assets and everything in public folder but minified))






# SC 4/11/2023 3:25 PM # Switching to Trello
Going forward will be using Trello on the project.
https://trello.com/b/iGL7r4wl/solo-project-tango-platoon

Next task is to Connect a Full Stack Application with Django, PostgreSQL, and React

Right now have Django and React scaffolding set up, I want to finalize the DB Schema design before building up my models

Building a Spotify API Searcher in React:
https://www.youtube.com/watch?v=1PWDxgqLmDA 
Demo of building a search feature that accesses Spotify API
It is a Component where you search for an Artist (Taylor Swift) and it returns all the Albums of that artist.
I want to modify this to search for a Track and returns all Track Objects matching, displaying Album Image

- I want to add to the track models:
- Album img
- Use this as a Component, where on click you add that track to your post context?

https://medium.com/@sedwardscode/creating-a-spotify-app-on-the-spotify-developer-page-16907b5872e8

