# Generated by Django 4.0.4 on 2022-05-23 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_user_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_patient',
            field=models.BooleanField(default=True, verbose_name='patient status'),
        ),
    ]
