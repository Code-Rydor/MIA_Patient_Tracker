from django.db import models

# Create your models here.

class CalendarAppt(models.Model):
    name = models.CharField(max_length=50)
    appt_date = models.CharField(max_length=25)
    appt_time = models.CharField(max_length=15)
    