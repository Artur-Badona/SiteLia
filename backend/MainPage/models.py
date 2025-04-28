from django.db import models

class Aluno(models.Model):
    nome = models.CharField(max_length=15, null=False)
    avatar = models.ImageField(upload_to='alunos/', default='alunos/default_avatar.png', blank=True, null=False)
    link = models.URLField(null=False, blank=False)

    def __str__(self):
        return self.nome
    

class Professor(models.Model):
    nome = models.CharField(max_length=30, null=False)
    avatar = models.ImageField(upload_to='professores/', default='professores/default_avatar.png', blank=True, null=False)
    link = models.URLField(null=False, blank=False)

    def __str__(self):
        return self.nome