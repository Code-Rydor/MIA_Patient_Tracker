from django.db import models
from patients.models import Patient
from authentication.models import User

class AppointmentDate(models.Model):
    date = models.CharField(max_length=50)


class Appointment(models.Model):
    eightam = '8am'
    tenam = '10am'
    twelvepm = '12pm'
    twopm = '2pm'
    fourpm = '4pm'
    sixpm = '6pm'
    APPOINTMENT_TIME_CHOICES = [
        (eightam, '8am'),
        (tenam, '10am'),
        (twelvepm, '12pm'),
        (twopm, '2pm'),
        (fourpm, '4pm'),
        (sixpm, '6pm'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)#Remove user... maybe?
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)#Take off _id 
    appointment_day_id = models.ForeignKey(AppointmentDate, on_delete=models.CASCADE)#Take off _id
    appointment_time = models.CharField(max_length=4, choices=APPOINTMENT_TIME_CHOICES, default='')