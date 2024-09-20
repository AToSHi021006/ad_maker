from django.urls import path
from . import views

urlpatterns = [
    path('campaign/', views.SetCampaignName),
]