# Generated by Django 4.0.4 on 2022-05-06 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='is_tobecontacted',
            field=models.BooleanField(default=False, verbose_name='to be contacted status'),
        ),
    ]
