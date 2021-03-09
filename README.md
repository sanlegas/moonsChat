# MoonsChat
Simple chat hecho con Angular 11 &amp; Node.js

## Corriendo en producción
El proyecto se ha deployado en Heroku para que se pueda probar en un ambiente productivo, la url es la siguiente:
https://moonschat.herokuapp.com/

## Despliegue local
Necesitas tener instalado `node.js` junto con su administrador de paquetes(`npm`)
Se necesitan instalar las dependencias del proyecto de node.js corriendo `npm i` en la raiz del proyecto a nivel donde se ubica el package.json

### Cliente
El cliente consta de la mayoría de los archivos que están en el proyecto, puedes compilar/generar los archivos necesarios corriendo el comando `ng build` en la raiz del proyecto

### Servidor
El servidor consta de solo el archivo `server.js`, puedes correrlo con el comando `node server.js`, se va a levantar un servidor de sockets escuchando en el puerto 3000

### Entrar en el Chat Local
Una vez corriendo el cliente y el servidor puedes entrar a la siguente url http://localhost:3000 para poder visualizar e interactuar con el chat.



