from .models import ad
from rest_framework import serializers

class AdSerializer(serializers.ModelSerializer):
    class Meta:
        model = ad
        fields = '__all__'  # Adjust as necessary