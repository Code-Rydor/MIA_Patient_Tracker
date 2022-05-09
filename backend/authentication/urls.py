from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
# from .views import RegisterView, MyTokenObtainPairView
from . import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('users/', views.users_list),
    path('users/<int:pk>/', views.user_detail),
    path('users/patch/<int:pk>/', views.user_patch),
]
