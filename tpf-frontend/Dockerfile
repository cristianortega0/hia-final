# Usar la imagen oficial de Nginx
FROM nginx:alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/share/nginx/html

# Eliminar los archivos predeterminados de Nginx
RUN rm -rf ./*

# Copiar la aplicación Angular ya construida (dist) al directorio predeterminado de Nginx
COPY ./dist/tpf-frontend/browser ./

# Copiar el archivo de configuración de Nginx personalizado (opcional, ver nota abajo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]


