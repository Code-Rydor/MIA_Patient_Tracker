from django.urls import path
from . import views

urlpatterns = [
    path('', views.appointments_list),
    path('<int:pk>/', views.appointment_detail),
    path('appointmentdates/', views.appointmentdate_list),
]