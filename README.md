# El Bodegón de los Trajes

Página web profesional para **El Bodegón de los Trajes** — Elegancia, estilo y distinción en cada prenda.

## Estructura del Proyecto

```
defintivo/
├── public/
│   ├── index.html        # Página principal
│   └── style.css         # Estilos premium
├── img/
│   ├── logo.jpg          # Logo oficial
│   └── *.jpg             # Imágenes del catálogo
├── server.js             # Servidor Express
├── package.json          # Dependencias Node.js
├── Dockerfile            # Configuración Docker
├── docker-compose.yml    # Orquestación Docker
├── .gitignore            # Archivos ignorados por Git
└── .dockerignore         # Archivos ignorados por Docker
```

## Inicio Rápido

### Con Docker (Recomendado)

```bash
# Construir y ejecutar
docker compose up -d --build

# Detener
docker compose down
```

El sitio estará disponible en: **http://localhost:3000**

### Sin Docker

```bash
npm install
npm start
```

## Ramas

| Rama | Descripción |
|------|-------------|
| `main` | Producción estable |
| `develop` | Desarrollo activo |

## Funcionalidades

- Diseño responsive y profesional
- Menú de navegación con scroll suave
- Secciones: Inicio, Sobre Nosotros, Catálogo, Contacto
- Filtros de catálogo por categoría
- Formulario de contacto
- Optimizado para Docker con healthcheck
