from django.conf import settings
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Professor
from .models import Aluno
from .serializers import ContactSerializer, ProfessorSerializer, AlunoSerializer
from .email_utils import send_contact_email
from django.core.mail import send_mail

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
    

@api_view(['POST'])
def contact_view(request):
    # Check if the request method is POST
    if request.method == 'POST':
        # Validate the incoming data with the serializer
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            # Extract email and message from validated data
            email = serializer.validated_data['email']
            subject = f"Novo contato de {email}"
            message = serializer.validated_data['message']

            # You can perform whatever action you want with this data.
            # For example, sending an email:
            try:
                send_contact_email(subject, message)
                # print(f"{subject} {email} {message}")
                return Response({"message": "Mensagem enviada com sucesso!"}, status=200)
            except Exception as e:
                return Response({"error": str(e)}, status=500)

        # If the serializer is not valid, return the errors
        return Response(serializer.errors, status=400)