# Generated by Django 4.2 on 2023-05-11 22:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_remove_track_album'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='track',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.track'),
        ),
    ]
