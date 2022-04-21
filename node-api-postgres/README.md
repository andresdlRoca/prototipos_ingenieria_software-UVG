# Backend ExpressJS connect to PostgreSQL DB
Previo a utilizar este backend se debe tener una base de datos de psql llamada uvgente. 
## Dependencias
El backend tiene sus propias dependencias con npm necesarias asi que sera necsaria hacer un npm i sobre este directorio
```
cd /node-api-postgres
npm i
```
## Crear archivo db-pg-config.js
En este mismo directorio creamos un archivo con ese nombre con este formato: 
### Formato
```javascript
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'uvgente',
  password: 'admin123',
  port: 5432,
})
module.exports =  pool
```
Utilzando nuestra usuario y contraseña de postgres, asi como lo base de datos uvgente creada. 
## Iniciar server con node
Para iniciar el servidor con node y poder hacer peticiones http, ingresamos en consola. 
```
node index.js
```
Lo que debe dar resultado en consola: 
```
App running on port 3000.
```
Y podremos hacer nuestras peticiones sobre la direccion: http://localhost:3000/