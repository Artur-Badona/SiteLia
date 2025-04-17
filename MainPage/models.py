from django.db import models

class Alunos(models.Model):
    nome = models.CharField(max_length=15, null=False)
    avatar = models.ImageField(upload_to='alunos/', default='alunos/default_avatar.png', blank=True, null=False)

    def __str__(self):
        return self.nome
    

class Professores(models.Model):
    nome = models.CharField(max_length=30, null=False)
    avatar = models.ImageField(upload_to='professores/', default='professores/default_avatar.png', blank=True, null=False)

    def __str__(self):
        return self.nome


class Projetos(models.Model):
    nome = models.CharField(max_length=30, null=False, blank=False)
    descricao = models.TextField(blank=False, null=False)

    def __str__(self):
        return self.nome