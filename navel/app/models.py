from django.contrib.auth.models import AbstractUser
from django.db import models

"""_
        AUTH_USER_MODEL = 'app.App_User'
        SC 4/13/2023 4:28 PM:
            Kanye West issue
            Create as user, not as column
            https://kanye.rest/
            Special Users => permission lvls
            KanyeBot that doesnt have useracct
"""

class App_User(AbstractUser):
    email = models.EmailField(blank=False, null = False, unique = True)
    name = models.CharField(max_length = 255, null = False, blank = False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} | {self.email}"


class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, null=True)
    # not required for user^
    # field (not required) bot
    
    # if user display name user, n 
    # if user is empty, have system check bot field
    # elif customvalidation one of these two must exist
    # bot hard coded into app can make posts using API
    # users can do the same
    # bot component sched tasks, once every 12 hours call API and post name Author=KanyeBotName
    # If KW 
    #   unit tests would create a user that might post KW
    #   divorce bots and user to avoid backdoor 
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.TextField()

class Track(models.Model):
    track_id = models.AutoField(primary_key=True)
    track_name = models.CharField(max_length=255)
    artist_name = models.CharField(max_length=255)
    album = models.CharField(max_length=255)
    url = models.CharField(max_length=255)

class PostTrack(models.Model):
    """
    For this, The original goal was to create a PostTrack that is unique and draws from Post and Track
    While CompositeKeyColumns exist in SQL, they sadly do not exist in Django
        To fix, introducing Meta class with unique_together
        that combination should be unique together, so no Postrack will have duplicate primary keys
        no need for explicit pk here since django creates an implicit primary key if not defined
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    track = models.ForeignKey(Track, on_delete=models.CASCADE)
    class Meta:
        unique_together = (('post','track'),)

class Bot:
    def __init__(self):
        # Constructor for Bot class
        pass
    def make_post(self, content, location):
        # Logic for making a post
        pass

class Child(Bot):
    def __init__(self):
        # Constructor for Child class
        super().__init__()  # Call the parent class constructor
    def get_kanye_west_content(self):
        # Logic for fetching content from kanye.rest API
        pass



"""
If this all breaks from Week9-4 2:30
class App_User(AbstractUser):
    email = models.EmailField(blank=False, null = False, unique = True)
    name = models.CharField(max_length = 255, null = False, blank = False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} | {self.email}"

"""