# Usar una imagen de Node.js para construir la aplicación Angular
FROM node:18 as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios (package.json y package-lock.json)
COPY package*.json ./

# Instalar las dependencias de Angular
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Construir la aplicación Angular (esto generará los archivos en dist/)
RUN npm run build --prod

# Usar la imagen oficial de Nginx
FROM nginx:alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/share/nginx/html

# Eliminar los archivos predeterminados de Nginx
RUN rm -rf ./*

# Copiar la aplicación Angular ya construida (dist) al directorio predeterminado de Nginx
#COPY ./dist/tpf-frontend/browser ./

# Copiar los archivos construidos de la fase anterior (dist/tpf-frontend/browser)
COPY --from=build /app/dist/tpf-frontend/browser ./

# Copiar el archivo de configuración de Nginx personalizado (opcional, ver nota abajo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]
