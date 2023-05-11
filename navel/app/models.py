from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import BaseUserManager

"""_
        AUTH_USER_MODEL = 'app.App_User'
        SC 4/13/2023 4:28 PM:
            Kanye West issue
            Create as user, not as column
            https://kanye.rest/
            Special Users => permission lvls
            KanyeBot that doesnt have useracct
"""

class UserManager(BaseUserManager):
    use_in_migrations = True
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users require an email field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self._create_user(email, password, **extra_fields)

# Before 5/4/23 4:28 PM
class Location(models.Model):
    id = models.AutoField(primary_key=True)
    state = models.CharField(max_length=255)
    city = models.CharField(max_length=255)

class App_User(AbstractUser):
    
    email = models.EmailField(blank=False, null = False, unique = True)
    name = models.CharField(max_length = 255, null = False, blank = False)
    location = models.ForeignKey(Location, on_delete=models.PROTECT, null=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    objects = UserManager()
    def save(self, *args, **kwargs):
                self.full_clean()
                return super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.name} | {self.email}"


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.TextField()

class Track(models.Model):
    track_id = models.AutoField(primary_key=True)
    track_name = models.CharField(max_length=255)
    artist_name = models.CharField(max_length=255)
    # album = models.CharField(max_length=255)
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

