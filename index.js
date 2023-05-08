//requerir las dependencias necesarias

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
require('./database')

//configurar el puerto

app.set('Port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));

app.use('/usuario',require('./routes/usuario.route'))
app.use('/informacion',require('./routes/informacion.route'))
app.use('/hobbie',require('./routes/hobbie.route'))

app.listen(app.get('Port'),()=>{
    console.log("Escuchando al servidor: prueba inst", app.get('Port'));
})
