# Generated by Django 3.2.8 on 2021-10-12 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groupsusers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='simpleuser',
            name='group',
        ),
        migrations.AddField(
            model_name='simpleuser',
            name='groups',
            field=models.ManyToManyField(blank=True, null=True, related_name='users', to='groupsusers.Group'),
        ),
    ]