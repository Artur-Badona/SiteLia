from rest_framework.views import APIView
from rest_framework.response import Response

class MainPage(APIView):
    def get(self, request):
        return Response({"message": "Calma Calabresa"})