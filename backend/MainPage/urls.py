from django.urls import include, path
from .views import contact_view, ProfessoresList, AlunosList

urlpatterns = [
    path('api/professores/', ProfessoresList.as_view(), name='professores-list'),
    path('api/alunos/', AlunosList.as_view(), name='alunos-list'),
    path("api/contact/", contact_view, name="contact"),
]