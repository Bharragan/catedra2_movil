# Cátedra2 Móvil

## Estudiante
Nicolas Henriquez Pedraza  
Código: 202135919

## Configuración General

### Clonar Repositorio
```bash
git clone https://github.com/Bharragan/catedra2_movil.git
cd catedra2_movil
cd backend
```

Backend

Para utilizar el proyecto backend, es necesario tener instalado Node.js y Express.
Instalación de Dependencias

Dentro del directorio backend, ejecuta:

```bash
npm install
```
Configuración

Crea un archivo .env en la carpeta backend con la siguiente configuración:

.env
```
PORT=5000
MONGODB_URI="tu_url_de_mongo"
```
Asegúrate de reemplazar "tu_url_de_mongo" con la URL de tu base de datos MongoDB.

Ejecución

Para iniciar el servidor, ejecuta:

```bash
npm start
```
Esto pondrá en marcha el servidor y podrás comenzar a utilizar el backend.

# Frontend - Cátedra 2

Este proyecto representa el frontend de la aplicación Cátedra 2.

## Configuración inicial

1. Navega a la carpeta del frontend:

```bash
cd frontend/catedra2
```

Instala las dependencias necesarias con npm:
```bash
npm install
 ```

Crea un archivo .env en la raíz del directorio catedra2 con la siguiente configuración:

.env

    REACT_APP_API_URL = "http://localhost:5000"

    Asegúrate de ajustar la URL según la configuración de tu backend.

Ejecutar la aplicación

Una vez que hayas completado la configuración inicial, puedes iniciar la aplicación con el siguiente comando:

 ```bash
npm start
 ```
Esto iniciará la aplicación en modo de desarrollo y podrás verla en tu navegador.

IMPORTANTE: Asegúrate de que el backend esté en ejecución antes de iniciar el frontend.
Postman

Se adjunta una colección de Postman para realizar pruebas. Puedes importar la colección en Postman y utilizarla para probar las diferentes funcionalidades de la API.
