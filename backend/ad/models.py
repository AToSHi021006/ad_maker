from django.db import models

class ad(models.Model):
    campaignName = models.CharField(max_length=255)
    adsetName = models.CharField(max_length=255)

    image = models.ImageField(upload_to='assets/images/', null=True, blank=True)
    video = models.FileField(upload_to='assets/videos/', null=True, blank=True)
