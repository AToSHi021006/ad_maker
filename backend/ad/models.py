from django.db import models

class Campaign(models.Model):
    campaign_name = models.CharField(max_length=1000)

    def __str__(self):
        return self.campaign_name
