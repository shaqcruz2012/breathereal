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

Cold Start Commands:
double split screen terminals

venv terminal:
  cd /home/shaqc/programming/tangoplatoon/curriculum/breathereal
  source env/bin/activate
  git status

react terminal:
  cd /home/shaqc/programming/tangoplatoon/curriculum/breathereal/frontend
  npm run dev

postgresql terminal:
  cd /home/shaqc/programming/tangoplatoon/curriculum/breathereal
  sudo service postgresql start
django terminal:
  cd /home/shaqc/programming/tangoplatoon/curriculum/breathereal
  source env/bin/activate
  cd /home/shaqc/programming/tangoplatoon/curriculum/breathereal/navel
  python3 manage.py runserver

Frontend:
http://127.0.0.1:8000/

Backend:
http://127.0.0.1:8080/
