PRACTICA INTEGRADORA HERRAMIENTAS INFORMATICAS AVANZADAS 2024
INTEGRANTES: ORTEGA, CRISTIAN ALFREDO ---
             VALERO, FERNANDO ALFREDO ---
             VELAZCO, NICOLAS JONATAN EZEQUIEL --

OBJETIVO: Este trabajo práctico integrador está diseñado para evaluar el manejo de herramientas avanzadas en la implementación, despliegue y mantenimiento de aplicaciones web.

1. Selección de la aplicación web
Tarea: Seleccionar una aplicación web previamente desarrollada (por ejemplo, un proyecto académico). Identificar el stack tecnológico utilizado:
 Backend: Node.js, Spring, Django, etc.
 Frontend: Angular, React, etc.
 Base de datos: PostgreSQL, MySQL, MongoDB, etc.
 Si la aplicación no está en un repositorio remoto, utiliza Git para inicializar y subirla (GitHub, GitLab, etc.)
2. Actividad 1: Contenedores para servicios y base de datos
Objetivo: Dockerizar la aplicación. Para esto:
1. Base de datos:
Crear un contenedor para la base de datos (p.ej., PostgreSQL o MySQL).
Configurar un cliente dockerizado (p.ej., pgAdmin para PostgreSQL o phpMyAdmin para MySQL).
Migrar los datos existentes al contenedor.
Backups automatizados: Configura un contenedor adicional para ejecutar backups automáticos de la base de datos. Usa herramientas como pg_dump (PostgreSQL) o mysqldump (MySQL)
3. Actividad 2: Contenedores para servicios web
Objetivo: Dockerizar la aplicación principal (backend, frontend) y exponerla para que sea
accesible desde el navegador.
Configura contenedores para cada componente:
Frontend: Angular/React.
Backend: Node.js/Spring.
Despliegue: Configura los puertos y dependencias en el docker-compose.yml.
Pruebas: Asegúrate de que la aplicación funcione correctamente con datos mínimos
cargados.
Integre herramientas como Prometheus y Grafana para monitorear métricas en tiempo real (CPU, memoria, etc.).

4. Actividad 3: Despliegue continuo
Objetivo: Automatizar el flujo desde el repositorio hasta la producción:
1. Configura un pipeline de integración y despliegue continuo (CI/CD): Herramientas recomendadas: GitHub Actions, GitLab CI/CD o Jenkins. Define un workflow que detecte cambios en el repositorio (p.ej., un push) y reconstruya la imagen del contenedor.
2. Modifica el header/footer de la aplicación para incluir los nombres de los integrantes.
Pruebas: Realiza un commit con los cambios y verifica que el despliegue sea automático.
5. Actividad 4: Clúster de replicación
Objetivo: Configurar un clúster de replicación para la base de datos:
1. Implementa un clúster de replicación para la base de datos (p.ej., PostgreSQL). Herramientas: Patroni, Pgpool-II, o servicios internos de MySQL/MongoDB.
2. Cambia la configuración de tu aplicación para que apunte al clúster en lugar de a la
instancia aislada.
3. Realiza pruebas para verificar la alta disponibilidad y la replicación de datos.

