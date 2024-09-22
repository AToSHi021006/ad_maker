from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AdSerializer

@api_view(['POST'])
def Ad(request):
    
    response_data = request.data
    print(response_data)
    return Response(response_data)
