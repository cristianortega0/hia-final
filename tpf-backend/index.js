//************************* */

// Importar dependencias
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const sequelize = require('./database'); // Importa sequelize desde tu archivo de configuración

// Importar modelos
const Usuario = require('./models_sql/Usuario');
const Alquiler = require('./models_sql/Alquiler');
const Local = require('./models_sql/Local');
const Cuota = require('./models_sql/Cuota');
const Novedad = require('./models_sql/Novedad');
const Promocion = require('./models_sql/Promocion');

// Establecer las relaciones entre los modelos

Alquiler.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });  // Alquiler pertenece a Usuario
Usuario.hasMany(Alquiler, { foreignKey: 'usuarioId', as: 'alquileres' }); // Usuario tiene muchos Alquileres
Alquiler.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Local.hasMany(Alquiler, { foreignKey: 'localId', as: 'alquileres' });
Alquiler.belongsTo(Local, { foreignKey: 'localId'});
Alquiler.hasMany(Cuota, { foreignKey: 'alquilerId' });
Alquiler.hasMany(Promocion, { foreignKey: 'alquilerId', as: 'promociones' });
Alquiler.hasMany(Novedad, { foreignKey: 'alquilerId', as: 'novedades' }); // Relación con Novedades
Novedad.belongsTo(Alquiler, { foreignKey: 'alquilerId', as: 'alquiler',onDelete: 'CASCADE' });
Promocion.belongsTo(Alquiler, { foreignKey: 'alquilerId', as: 'alquiler', onDelete: 'CASCADE' });

// Configuración de express y otros middlewares
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Conexión a la base de datos
sequelize.authenticate() // Verificamos la conexión a la base de datos
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    
    // Sincronización de las tablas después de la conexión exitosa
    sequelize.sync({ force: true })  // Esto eliminará las tablas existentes y las volverá a crear
      .then(() => {
        console.log("Tablas sincronizadas correctamente");
      })
      .catch((error) => {
        console.error("Error al sincronizar tablas", error);
      });
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Aquí seguirían las rutas de tu aplicación y la configuración de la API
app.use('/api/usuario', require('./routes/usuario.route.js'));
app.use('/api/alquiler', require('./routes/alquiler.route.js'));
app.use('/api/local', require('./routes/local.route.js'));
app.use('/api/novedad', require('./routes/novedad.route.js'));
app.use('/api/cuota', require('./routes/cuota.route.js'));
app.use('/api/promocion', require('./routes/promocion.route.js'));

// Puerto y servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
