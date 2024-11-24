# Usa una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./

# Copiar todo el código del backend
COPY . .

# Instalar las dependencias
RUN npm install

# Establecer las variables de entorno (pueden ser sobrescritas al ejecutar el contenedor)
ENV PORT=3000
ENV DB_HOST=mysql
ENV DB_PORT=3306

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación (sin esperar por la base de datos)
CMD ["npm", "start"]