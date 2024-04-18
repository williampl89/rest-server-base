const express = require('express');
var cors = require('cors');
const { dbConecction } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';
        this.authPath = '/api/auth';
        
        //Conectar a base de datos MongoDB
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConecction();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('listening on port ', this.port);
        });
    }


}

module.exports = Server;