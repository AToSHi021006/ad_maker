from .models import Campaign
from rest_framework import serializers

class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = ['campaign_name']
