# Etapa de build
FROM python:3.11-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends gcc libpq-dev

COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Etapa de execução
FROM python:3.11-slim AS runner

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Copia dependências da etapa de build
COPY --from=builder /usr/local /usr/local

# Copia o código da aplicação
COPY . .

# Cria diretórios de mídia e estáticos
RUN mkdir -p /app/media /app/static

# Expõe a porta
EXPOSE 8000

# Usa gunicorn como servidor
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]