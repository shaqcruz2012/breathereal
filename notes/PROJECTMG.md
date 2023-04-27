https://github.com/tangoplatoon/curriculum/blob/main/week-10/day1/project-management.md

https://trello.com/b/iGL7r4wl/solo-project-tango-platoon 

# Github Usernames:
  Francisco : fravila08
  Nick : Ickarus75
  Joe: JRA96
  Tyler : tkoenig97
  Netanel : nfrankeln

# Steps for each Task:
git branch PROJECT-00x
git branch
git checkout PROJECT-00x
  ...
  ...
  Some work
git branch (
  * PROJECT-001
    master
)
git status (
  untracked files:
  postgresql.md
)
git add .
git commit -m 'PROJECT-00x trello task'
git push origin PROJECT-00x

On GH: Create Pull Request, Request Reviewers
 "just making sure I have it down, you create a branch and push the branch, then on GitHub create a pull request so you can merge?" Yes.

# Cold Start Commands:
double split screen terminals

venv terminal:
  cd /home/shaqc/programming/breathereal
  source env/bin/activate
  git status

react terminal:
  cd /home/shaqc/programming/breathereal/frontend
  npm run dev

react watcher terminal:
  cd /home/shaqc/programming/breathereal/frontend
  npm run watch

postgresql terminal:
  cd /home/shaqc/programming/breathereal
  sudo service postgresql status
  sudo service postgresql start

django terminal:
  cd /home/shaqc/programming/breathereal
  source env/bin/activate
  cd /home/shaqc/programming/breathereal/navel
  python3 manage.py runserver 5174

Frontend:
http://127.0.0.1:8000/

Backend:
http://127.0.0.1:8080/

SC 4/20/2023 8:32 PM
Tomorrow will be better. Start again and figure out restful API https://youtu.be/6vBGHBmXKAw?t=5923. Solid day today.

SC 4/27/2023 8:04 AM
You have 24 hours to integrate 2 apis and get the front end to work with the back end. You can start a brand new project if you want as well as do a new user auth set up