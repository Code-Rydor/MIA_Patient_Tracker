from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PatientSerializer
from .models import Patient


@api_view(['GET', 'POST'])
def patients_list(request):
    if request.method == 'GET':
        patients = Patient.objects.all()
        serializer = PatientSerializer(patients, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PatientSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)