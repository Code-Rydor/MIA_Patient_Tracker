from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'first_name', 'last_name', 'phone_number', 'email',]
        depth = 1

    # user_id = serializers.IntegerField(write_only=True)