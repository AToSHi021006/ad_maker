from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CampaignSerializer

@api_view(['POST'])
def SetCampaignName(request):
    # serializer = CampaignSerializer(data=request.data)
    # if serializer.is_valid():
    #     campaign_name = serializer.validated_data['campaign_name']
    #     response_data = {'message': 'POST request received', 'campaign_name': campaign_name}
    #     print(response_data)
    #     return Response(response_data)
    # return Response(serializer.errors, status=400)


    response_data = request.data
    print(response_data)
    return Response(response_data)
