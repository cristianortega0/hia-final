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

# Copiar el script wait-for-it
COPY wait-for-it.sh /wait-for-it.sh

# Dar permisos de ejecución al script
RUN chmod +x /wait-for-it.sh

# Comando para esperar a que la base de datos esté lista y luego iniciar la aplicación
CMD ["sh", "-c", "/wait-for-it.sh $DB_HOST:$DB_PORT -- npm start"]
