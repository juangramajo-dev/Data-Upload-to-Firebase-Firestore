# Script de Subida de Datos a Firebase Firestore

Este script se utiliza para subir datos desde un archivo JSON a una colección en Firebase Firestore.

## Requisitos Previos

- Node.js instalado en tu sistema.
- Una cuenta de servicio de Firebase con acceso a Firebase Firestore.
- Un archivo JSON que contiene los datos que deseas subir a Firestore.

## Configuración

1. Asegúrate de tener un archivo JSON con los datos que deseas subir. Este archivo debe estar ubicado en la carpeta `./json/data.json`.

2. Necesitarás un archivo JSON que contenga las credenciales de tu cuenta de servicio de Firebase. Este archivo debe estar ubicado en `./key_service_account.json`.

3. Asegúrate de que la variable `collectionKey` esté configurada con el nombre de la colección en Firestore donde deseas almacenar los documentos.

## Instalación de Dependencias
Antes de ejecutar el script, debes instalar las dependencias de necesarias. Puedes hacerlo ejecutando el siguiente comando:

```
npm i
```

Asegurate de que firebase-admin este instalado en tu package.json, si no lo esta ejecuta el siguiente comando:

con NPM

```
npm install firebase-admin
```

o con Yarn

```
yarn add firebase-admin
```

## Uso

1. Ejecuta el script utilizando Node.js. Esto subirá los datos del archivo JSON a la colección especificada en Firebase Firestore.

```
node index.js
```

## Descripción del Script

1. **Inicialización de Firebase Admin**: El script importa el módulo `firebase-admin` y utiliza las credenciales del archivo JSON para inicializar la aplicación de Firebase.

2. **Obtención de los Datos**: El script importa los datos del archivo JSON ubicado en `./json/data.json`.

3. **Configuración de Firestore**: Se obtiene una instancia de Firestore y se aplican las configuraciones necesarias.

4. **Subida de Datos**: Los datos se recorren en un bucle y se suben a Firestore como documentos individuales en la colección especificada. Cada documento utiliza el campo "id" del objeto JSON como su clave.

5. **Manejo de Errores**: Se manejan los errores que puedan ocurrir durante la subida de datos, mostrando mensajes de error en la consola.

6. **Mensajes de Éxito**: Se muestra un mensaje en la consola para indicar que cada documento se ha subido correctamente.

## Notas Adicionales

- Asegúrate de que la estructura de tu archivo JSON coincida con la estructura de los documentos que deseas almacenar en Firestore.
- Este script asume que los datos están estructurados de tal manera que cada objeto del JSON representa un documento individual en Firestore, y que el campo "id" de cada objeto se puede utilizar como clave del documento.
- Se deja a continuación un ejemplo de como debe ser la estructura del .json

```json
{
  "id": "p2ZTwVceBWLrd0jIzjTD",
  "direccion": "Tábanos  Santa fe CP3551",
  "nombre": "  Nadia Jaquelina ",
  "sucursal": "Santa Fe",
  "curso": "Enfermeria y Paramedico",
  "apellido": " Robledo ",
  "telefono": "12312356",
  "email": "nadiarobledo0@gmail.com",
  "DNI": "12345678",
  "marca_temporal": {
    "_seconds": 1708371783,
    "_nanoseconds": 408000000
  },
  "marca_temporal_certificados": {
    "_seconds": 1708371783,
    "_nanoseconds": 408000000
  }
}
```
