# Generated by Django 4.0.4 on 2022-05-09 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_user_is_tobecontacted'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='', max_length=20),
        ),
    ]