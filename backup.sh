#!/bin/bash
# Directorio de destino para los backups
BACKUP_DIR=/backups
# Formato del nombre del archivo de backup (YYYY-MM-DD_HH-MM-SS.sql)
FILE_NAME=$(date +"%Y-%m-%d_%H-%M-%S").sql

# Comando de backup con mysqldump
mysqldump -h mysql -u root -proot tpf_db_d > $BACKUP_DIR/$FILE_NAME

# Limpiar backups antiguos (mantener solo los últimos 7)
#find $BACKUP_DIR -type f -mtime +7 -exec rm {} \;

echo "Backup realizado: $BACKUP_DIR/$FILE_NAME"