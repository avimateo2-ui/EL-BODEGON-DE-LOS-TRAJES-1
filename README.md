# Proyecto Web Node.js + Express + Docker + Git

Estructura lista para producción y desarrollo local con contenedores Docker y control de versiones Git.

---

## 🚀 Inicio Rápido con Docker

```bash
# 1. Levantar el proyecto con Docker Compose
docker compose up -d --build

# 2. Ver estado de los contenedores
docker compose ps

# 3. Ver logs en tiempo real
docker compose logs -f

# 4. Detener el contenedor
docker compose down
```

La aplicación estará disponible en: **`http://localhost:3000`**

---

## 💻 Inicio Rápido Local (Sin Docker)

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Iniciar en producción
npm start
```

---

## 🌿 Flujo de Git

```bash
# Ver estado
git status

# Crear una rama para una nueva funcionalidad
git checkout -b feat/mi-funcionalidad

# Guardar cambios
git add .
git commit -m "feat: implementacion de funcionalidad"

# Subir cambios al repositorio remoto
git push origin feat/mi-funcionalidad
```

---

## 📁 Estructura del Proyecto

```text
├── img/                # Directorio de imágenes y recursos
├── public/             # Frontend estático (HTML, CSS, JS)
│   ├── index.html
│   └── style.css
├── .dockerignore       # Archivos excluidos de la imagen Docker
├── .gitignore          # Archivos excluidos de Git
├── Dockerfile          # Definición de la imagen de Docker
├── docker-compose.yml  # Orquestación y puertos del contenedor
├── package.json        # Dependencias y scripts de Node.js
├── README.md           # Guía del proyecto
└── server.js           # Servidor Express y endpoints API
```
