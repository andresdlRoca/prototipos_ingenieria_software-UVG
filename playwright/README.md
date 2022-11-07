## Run test
Para que los tests funcionen deben estar corriendo el backend y frontend. Particularmente el backend debe correr en pruebas, para no alterar la base de datos de produccion. 

Correr en una terminal en el directorio del back: 'node-api-postgres' (backend)
```
npm run start:test
```
Correr en una terminal en el directorio del front: 'react-uvgente' (frontend)
```
npm start
```
## Comandos utiles
### Iniciar test
```
npx playwright test
```
### Generacion de codigo automatico
```
npx playwright codegen http://localhost:3000
```
### Ver proceso
```
npx playwright test --headed
```
### Ver ulitmo reporte de tests realizado 
```
npx playwright show-report
```