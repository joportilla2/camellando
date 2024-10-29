const express = require('express');
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

//routes
app.use(require('./routes/index'));
// Configurar cabeceras y cors
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/

app.listen(3000);
console.log('Servicio rest nuevo en el puerto 3000');
