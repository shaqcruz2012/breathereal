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