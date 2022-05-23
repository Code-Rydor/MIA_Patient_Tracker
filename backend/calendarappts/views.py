from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .serializers import CalendarApptSerializer
from .models import CalendarAppt


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def calendarappt_list(request):
    if request.method == 'GET':
        appt = CalendarAppt.objects.all()
        serializer = CalendarApptSerializer(appt, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CalendarApptSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def calendarappt_detail(request, pk):
    appt = get_object_or_404(appt, pk=pk)
    if request.method == 'GET':
        serializer = CalendarApptSerializer(appt)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CalendarApptSerializer(appt, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        appt.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
