const express = require('express');
var cors = require('cors');
const { dbConecction } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth', 
            buscar: '/api/buscar', 
            categorias: '/api/categorias', 
            productos: '/api/productos',
            usuarios: '/api/usuarios'
        }
        
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
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('listening on port ', this.port);
        });
    }


}

module.exports = Server;