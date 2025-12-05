# TuLandingYa

Landing page premium optimizada para conversión, construida con React 19, Tailwind CSS v4 y un backend Express + MySQL para capturar leads y suscriptores.

## Estructura

- `src/` – Frontend en React + Vite.
- `server/` – API Express con endpoints para leads y newsletter.
- `docker-compose.yml` – Orquesta frontend, API y MySQL.

## Variables de entorno

Copia `server/.env.example` a `server/.env` y ajusta los valores:

```bash
cp server/.env.example server/.env
```

Campos clave:

- `ALLOWED_ORIGINS` – Dominios que podrán llamar a la API (agrega tu dominio final).
- `DB_*` – Credenciales de MySQL. En Docker se usa `db` como host.
- `DB_ROOT_PASSWORD` – Contraseña del usuario root (se usa al levantar MySQL en Docker Compose).

## Desarrollo local

1. Instala dependencias raíz y las del servidor:

```bash
npm install
npm --prefix server install
```

2. Levanta frontend + API en paralelo:

```bash
npm run dev:full
```

El frontend vive en `http://localhost:5173` y proxea `/api` al servidor en `http://localhost:4000`.

## Scripts útiles

- `npm run build` – Genera la versión estática de la landing.
- `npm run lint` – Linter.
- `npm run dev:api` – Solo API con nodemon.

## Docker / VPS

1. Asegúrate de tener `server/.env` con valores de producción.
2. Construye y levanta los servicios:

```bash
docker compose up --build -d
```

Servicios:

- `web` – Nginx sirviendo la build de Vite.
- `api` – Node 20 ejecutando la API Express.
- `db` – MySQL 8.4 con volumen persistente (`db_data`).

El contenedor `api` crea las tablas `leads` y `newsletter_subscribers` si no existen.

## Puntos de integración

- `POST /api/leads` – Guarda leads completos con servicios solicitados.
- `POST /api/newsletter` – Registra correos en la newsletter (idempotente).
- `GET /api/health` – Chequeo básico de salud + conexión a base de datos.

## Deployment

En el VPS, copia el repositorio, configura `server/.env` con tus credenciales reales y ejecuta `docker compose up -d`. Expone el puerto 80 o colócalo detrás de tu reverse proxy / Traefik. Para certificados, usa tu herramienta habitual (por ejemplo, Caddy o nginx-proxy-manager).
