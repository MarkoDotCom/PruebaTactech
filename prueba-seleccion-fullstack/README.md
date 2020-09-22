### Para ejecutar el Frontend:

1. `npm install`
2. `npm start`

### Para ejecutar el Backend: 

1. `npm install`

2. `npm install -g nodemon`

3. `nodemon ./index.js`

   

### Como funciona?

#### Dentro del header tenemos 3 modulos:

- **Registro: ** la aplicacion cuenta con seguridad mediante JWT. Tambien puede **Iniciar Sesion**.
- **GOT:** acceso a la lista de los personajes de GOT. En una primera instancia se encontrara vacia y deberá usar el botton **Poblar DB** para que aparezcan los datos. 
- **Poblar DB**: Si usa este boton mas de una vez, se duplicaran los datos en MongoDB.

