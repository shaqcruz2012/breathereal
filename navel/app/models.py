from django.contrib.auth.models import AbstractUser
from django.db import models

"""_
    To make user login, We will be using AbstractUser instead of the default user model
    CustomUser model inherits from AbstractUser, 
        provides fields like username, email, password needed for auth
        allows is_kanye_west feature
    For future reference, dont forget to update your settings.py =>
        AUTH_USER_MODEL = 'app.CustomUser'
"""
class CustomUser(AbstractUser):
    user_id = models.AutoField(primary_key=True)
    is_kanye_west = models.BooleanField(default=False)

class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
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
