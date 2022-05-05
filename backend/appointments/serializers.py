from rest_framework import serializers
from .models import Appointment
from .models import AppointmentDate

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['patient_id', 'appointment_day_id', 'appointment_time', 'user_id']
        depth = 1

        user_id = serializers.IntegerField(write_only=True)

class AppointmentDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppointmentDate
        fields = ['date']