from django.urls import path
from . import views

urlpatterns = [
    path('', views.calendarappt_list),
    path('<int:pk>/', views.calendarappt_detail)
]