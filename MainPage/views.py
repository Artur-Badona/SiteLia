from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Professor
from .models import Aluno
from .serializers import ProfessorSerializer
from .serializers import AlunoSerializer
from django.http import JsonResponse
from django.core.mail import send_mail
from django.views import View
from django.conf import settings
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class ProfessoresList(APIView):
    def get(self, request):
        professores = Professor.objects.all()
        serializer = ProfessorSerializer(professores, many=True, context={'request': request})

        return Response(serializer.data)


class AlunosList(APIView):
    def get(self, request):
        alunos = Aluno.objects.all()
        serializer = AlunoSerializer(alunos, many=True, context={'request': request})

        return Response(serializer.data)