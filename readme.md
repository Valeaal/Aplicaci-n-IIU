# EI Virgen Inmaculada -- Trabajo IIU: Web de un centro educativo

Cada carpeta (Frontend y Backend) son dos "aplicaciones" que se intercambian información mediante los puertos del ordenador. Como dos aplicaciones independientes que usan NodeJS, se recomienda ejecutar el comando _npm install i_ dentro de las dos carpetas para que npm instale las dependencias necesarias y poder ejecutar la app correctamente.

La idea es organizar en directorios los componentes, e ir llamándolos en los "tabs" (pestañas), y así los podemos ir reutilizando. Por esa razón los componentes están en formato .jsx (react)

Ejecutar en el siguiente orden:

- Para ejecutar la aplicación Backend usamos _npm start_ en la carpeta correspondiente
- Para ejecutar la aplicación Fronend usamos _npm start_ en la carpeta correspondiente

## Construcción del proyecto

Hemos usado el siguiente tutorial para crear el esqueleto:

_https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/#:~:text=Step%201%3A%20Create%20your%20Node,folder%20into%20your%20code%20editor.&text=This%20will%20create%20a%20package,dependencies%20our%20Node%20app%20needs._ 

## Frontend

### Enrutado

Para manejar las rutas (url) del frontend, usamos react-router-dom. Ya figura como dependencia y se instalará al ejecutar "npm install i"

Hemos usado el siguiente tutorial para usar el enrutador del Frontend (react-router-dom):

https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/

### Bootstrap

Para usar Bootstrap en el Frontend, hemos descargado la librería correspondiente con npm y ahora aparece como dependencia en package.json, por lo que también se instalará al usar _npm install i_.

### Token

El hecho de descifrar el token en el frontend ha sido una movida:

jsonwebtoken ha resultado en un fracaso por varios motivos: Al usar varias librerías que ya no vienen "instaladas" en webpack, había que especificarlas en el webpack.config.js e instalarlas con npm (siguen especificadas como dependencias por si hay que usarlas), pero cryto daba problemas, así que habría que instalar react-app-rewired y crear un archivo config-overrride.js con su configuración (que nos ha costado la vida averiguar). Tras esto, borramos las dependencias de webpack.config.js (porque las hemos puesto en el config-override) y cambiamos los scripts de react start en package.json a react-app-rewired start para usar esta configuración. Esto ahora mismo está DESHABILITADO (tenemos puesto "react-scripts start"), porque hemos usado otra opción ya que aunque jsonwebtoken estaba correctamente instalado con todas sus dependencias, daba problemas al usarlo en el frontend. Hemos dejado todo instalado por si había que usar crypto en algún momento pero como digo ahora mismo está deshabilitado.

Ahora mismo usamos jwt-decode, una opción más sencilla pero que puede conllevar problemas de seguridad al no comprobar la firma del token. Para mejorar esto en algún momento (sin tener que usar jsonwebtoken) hemos instalado jose, que aunque no se use actualmente, puede ser útil en el futuro.

## Backend

### Token

Para manejar el login y el token de sesión, hemos ejecutado "npm install cors express --save-dev" en el Backend, que se encargará de devolver el token de sesión (algo como la cookie) que luego manejará el Frontend. Estos módulos (incluimos aquí jsonwebtoken, bcrypt...) ahora figuran como dependencias, así que los nuevos desarrolladores solo necesitarán ejecutar "npm install -i". 

Hemos seguido el tutorial (también implica al frontend):

"https://betterprogramming.pub/how-to-authentication-users-with-token-in-a-react-application-f99997c2ee9d"

### Enrutado

Como hemos dicho antes, el backend es una "aplicación independiente" que resuelve peticiones. Como tal (y como buena aplicación web funciona con http) tiene su propio enrutador (express). De eso se ha encargado Willy.

## Conexión Backend-Frontend

Para hacer peticiones http del frontend al backend usamos axios, de forma un poco cutre porque ponemos la url localhost con el puerto directamente. Sería buena práctica tener una variable url global para el frontend con la url del backend. De todas formas, la conexión funciona.

## Convenio de nomenclatura

- En las carpetas y estrutura de directorios, usamos el inglés y camelCase por convención de JS
- En los componentes (pro ejemplo, las exportaciones de funciones), usamos el inglés y CamelCase por convención de JS
- En las variables, usamos CamelCase también ya que estamos, aunque en español por comodidad.
- En las funciones, usamos camelCase y términos en inglés como get, aunque el resto en español (ej: getRutaInicio)
