from django.urls import path
from . import views

urlpatterns = [
    path('', views.appointments_list),
    path('<int:pk>/', views.appointment_detail),
    path('dates/', views.appointmentdate_list),
]