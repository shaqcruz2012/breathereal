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

SC 4/10/2023 2:09 ProblemToDoApp
https://github.com/tangoplatoon/curriculum/blob/main/week-10/day1/project-management.md

Create SQL schema
Can Export
Go to jeader create same ticheck
  git branch PROJECT-001
  git branch
    shows PROJECT-001 and main
  git checkout PROJECT-001
  touch postgresql.md
  issues, new issues, drop img, get link

  /co
  # SQu Schema
  ![drawSQ](url)

  git add .
  git commit -m 'PROJECT-001: Create SQL schema'
  git push origin PROJECT-001

  # add a reviewer
  Settings
  Collaborates > Add the collaborators you need
  > tkoenig97
  > Second Person

  git checkout main
  git merge PROJECT-001
  pit push origin main

  "just making sure I have it down, you create a branch and push the branch, then on GitHub create a pull request so you can merge?" Yes.
  
Create Wireframe
  - Use Figma or TL Draw
  Homepage, user Login page, API calls
  - Home has navbar, couple of columns
  - Login has circle, input fields, submit
  - API Call for Posts