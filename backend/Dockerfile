# Etapa de build
FROM python:3.11-slim AS builder

WORKDIR /app

# Instala dependências do sistema necessárias para compilar pacotes Python
RUN apt-get update && apt-get install -y --no-install-recommends gcc libpq-dev

# Copia e instala as dependências do projeto
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Etapa de execução
FROM python:3.11-slim AS runner

WORKDIR /app

# Define variáveis de ambiente para evitar escrita de bytecode e bufferização
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Copia as dependências instaladas da etapa anterior
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copia o código da aplicação
COPY . .

# Expõe a porta do Django
EXPOSE 8000

# Comando para rodar o servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
