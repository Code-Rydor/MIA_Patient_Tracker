from django.urls import path
from . import views

urlpatterns = [
    path('', views.patients_list),
    path('<int:pk>/', views.patient_detail),
]