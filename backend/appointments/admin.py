from django.contrib import admin
from .models import Appointment, AppointmentDate

admin.site.register(Appointment)
admin.site.register(AppointmentDate)