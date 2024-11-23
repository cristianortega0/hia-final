# Etapa 1: Construir la aplicación Angular
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación Angular al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Construir la aplicación Angular para producción
#RUN npm run build --prod

# Etapa 2: Servir la aplicación usando un servidor HTTP
FROM nginx:alpine

# Copiar la aplicación construida al directorio de nginx
#COPY --from=build /app/dist/ /usr/share/nginx/html

# Exponer el puerto en el que Nginx estará sirviendo la aplicación
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
