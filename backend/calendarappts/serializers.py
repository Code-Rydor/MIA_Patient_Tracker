from rest_framework import serializers
from .models import CalendarAppt

class CalendarApptSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarAppt
        fields = ['id', 'name', 'appt_date', 'appt_time']