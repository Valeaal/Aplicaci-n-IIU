# EI Virgen Inmaculada
Trabajo IIU: Web de un centro educativo

## Estructura inicial del proyecto y ejecución

Cada carpeta (Frontend y Backend) son dos "aplicaciones" que se intercambian información mediante los puertos del ordenador. Como dos aplicaciones independientes que usan NodeJS, se recomienda ejecutar el comando _npm install i_ dentro de las dos carpetas para que npm instale las dependencias necesarias y poder ejecutar la app correctamente.

La idea es organizar en directorios los componentes, e ir llamándolos en los "tabs" (pestañas), y así los podemos ir reutilizando. Por esa razón los componentes están en formato .jsx (react)

Ejecutar en el siguiente orden:

- Para ejecutar la aplicación Backend usamos _npm start_ en la carpeta correspondiente
- Para ejecutar la aplicación Fronend usamos _npm start_ en la carpeta correspondiente

### Frontend

Para manejar el enrutado de lado del servidor usaremos express, y del lado del cliente usaremos react-router-dom. Ambas dependencias incluidas en el package.json de cada "app".

Para usar Bootstrap en el Frontend, hemos descargado la librería correspondiente con npm y ahora aparece como dependencia en package.json, por lo que también se instalará al usar _npm install i_. De esta misma forma iremos incluyendo las librerías necesarias. (Estarán incluidas en el archivo package.json del proyecto, por lo que una vez que hemos construido este archivo, solo debéis de ejecutar el _npm install i_)

Hemos usado el siguiente tutorial para crear el esqueleto:

_https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/#:~:text=Step%201%3A%20Create%20your%20Node,folder%20into%20your%20code%20editor.&text=This%20will%20create%20a%20package,dependencies%20our%20Node%20app%20needs._ 

Hemos usado el siguiente tutorial para usar el enrutador del Frontend (react-router-dom):

https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/

### Backend

Para manejar el login y el token de sesión, hemos ejecutado "npm install cors express --save-dev" en el Backend, que se encargará de devolver el token de sesión (algo como la cookie) que luego manejará el Frontend. Estos módulos (incluimos aquí jsonwebtoken, bcrypt...) ahora figuran como dependencias, así que los nuevos desarrolladores solo necesitarán ejecutar "npm install -i". Hemos seguido el tutorial "https://betterprogramming.pub/how-to-authentication-users-with-token-in-a-react-application-f99997c2ee9d"

Como hemos dicho antes, el backend es una "aplicación independiente" que resuelve peticiones. Como tal (y como buena aplicación web funciona con http) tiene su propio enrutador. De eso se ha encargado Willy.

### Conexión Backend-Frontend

Para hacer peticiones http del frontend al backend usamos axios, de forma un poco cutre porque ponemos la url localhost con el puerto directamente. Sería buena práctica tener una url global para el frontend con la url del backend. De todas formas, la conexión funciona.

### Convenio de nomenclatura

- En las carpetas y estrutura de directorios, usamos el inglés y camelCase por convención de JS
- En los componentes (pro ejemplo, las exportaciones de funciones), usamos el inglés y CamelCase por convención de JS
- En las variables, usamos CamelCase también ya que estamos, aunque en español por comodidad.
- En las funciones, usamos camelCase y términos en inglés como get, aunque el resto en español (ej: getRutaInicio)
