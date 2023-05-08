const mongoose = require('mongoose');

//URL=('mongodb://localhost/pruebaIns');

URL=('mongodb://127.0.0.1/inst');

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=>console.log('Conexión exitosa a la bd: ',db.connection.name))
.catch(error=>console.log(error))

module.exports= mongoose