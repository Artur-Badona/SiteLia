# 🚀 Fullstack Docker Setup: Django + Next.js + Nginx

This project runs a Django backend and a Next.js frontend using Docker, with Nginx acting as a reverse proxy.

---

## ⚙️ Getting Started

### 1. Collect Django static files (needed for admin styling):

```bash
docker-compose run backend python manage.py collectstatic

docker-compose up --build
