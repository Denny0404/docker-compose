# Docker Compose Assignment

This project demonstrates how to use Docker Compose to set up and manage multiple services with best practices like persistent volumes, service dependencies, and scaling.

---

## 📦 Services Included

### 1. MySQL + phpMyAdmin
- MySQL 8.0 with persistent volume
- phpMyAdmin accessible at `http://localhost:8081`
- Credentials:
  - Username: `user`
  - Password: `userpass`

### 2. PostgreSQL + pgAdmin4
- PostgreSQL with persistent volume
- pgAdmin4 accessible at `http://localhost:5050`
- Credentials:
  - Email: `admin@admin.com`
  - Password: `admin`

### 3. ReactJS + NodeJS + NGINX
- React app built with multi-stage Docker build
- NodeJS backend service
- Load-balanced with NGINX
- Accessible at: `http://localhost`

---

## 🚀 How to Run

### Clone and enter each folder:
```bash
cd mysql_phpmyadmin
docker compose up

cd ../pgadmin_postgres
docker compose up

cd ../react_node_scaling
docker compose up --build
```

---

## 🧪 Testing

### 1. Terminal
Run `docker compose ps` in each directory to confirm services are running.

### 2. Browser Previews
Use GitHub Codespaces “Ports” tab to preview services at correct ports:
- `8081` → phpMyAdmin
- `5050` → pgAdmin4
- `80` → React App

---

## 🖼️ Screenshots

Add screenshots of:
- `docker compose up`
- `docker compose ps`
- Each application in the browser

Save them in a `/screenshots` folder for submission.

---

## ✅ Submission Checklist

- [x] All `docker-compose.yml` files working
- [x] Applications accessible in browser
- [x] Code pushed to GitHub
- [x] Screenshots included
