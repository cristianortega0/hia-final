#!/bin/bash

# Esperar a que mysql-maestro esté disponible
while ! mysqladmin ping -h mysql-maestro --silent; do
    echo "Esperando a que mysql-maestro esté listo..."
    sleep 2
done

# Configurar el usuario root en mysql-maestro para usar mysql_native_password
mysql -u root -proot -h mysql-maestro -e "ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';"

# Configurar replicación en el esclavo
mysql -u root -proot -e "
CHANGE REPLICATION SOURCE TO 
    SOURCE_HOST='mysql-maestro',
    SOURCE_PORT=3306,
    SOURCE_USER='root',
    SOURCE_PASSWORD='root',
    SOURCE_AUTO_POSITION=1;"

# Iniciar la replicación
mysql -u root -proot -e "START SLAVE;"


#mysql -u root -proot -h mysql-maestro -P 3306 -e "CHANGE MASTER TO MASTER_HOST='mysql-maestro', MASTER_PORT=3306, MASTER_USER='root', MASTER_PASSWORD='root', MASTER_AUTO_POSITION=1;"
#mysql -u root -proot -h mysql-esclavo -P 3306 -e "START REPLICA;"

#mysql -u root -proot -h mysql-esclavo -P 3306 -e "CHANGE MASTER TO MASTER_HOST='haproxy', MASTER_PORT=3306, MASTER_USER='root', MASTER_PASSWORD='root', MASTER_LOG_FILE='mysql-bin.000003', MASTER_LOG_POS=7540, MASTER_AUTO_POSITION=1;"
#mysql -u root -proot -h mysql-esclavo -P 3306 -e "START REPLICA;"
