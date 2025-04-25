from django.urls import path
from .views import ProfessoresList
from .views import AlunosList
from .views import ContactView

urlpatterns = [
    path('api/professores/', ProfessoresList.as_view(), name='professores-list'),
    path('api/alunos/', AlunosList.as_view(), name='alunos-list'),
    path("api/contact/", ContactView.as_view(), name="contact"),
]