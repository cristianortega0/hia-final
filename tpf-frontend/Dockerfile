# Etapa 1: Construir la aplicación Angular
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json para la instalación de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar los archivos de la aplicación Angular
COPY . .

# Ejecutar el build para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Verificar si nginx está disponible
RUN nginx -v || echo "Nginx no encontrado" && apk add --no-cache nginx

# Crear el directorio donde se alojarán los archivos estáticos si no existe
RUN mkdir -p /usr/share/nginx/html

# Copiar los archivos generados desde la etapa de construcción a Nginx
COPY --from=build /app/dist/tpf-frontend/browser/ /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
