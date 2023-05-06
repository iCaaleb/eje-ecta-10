//Definiciones
const express = require('express');
const app = express();
const port = process.env.port || 3000;

//Configuracion
app.use(express.static('public'));

//Proceso
app.listen(port, ()=>{
    console.log('Servidor corriendo en el puerto: ', port);
})  
