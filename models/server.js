const express = require('express');
const cors = require('cors');
const { conectar } = require('../config/config');



class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8081";
        this.middlewares();
        this.connection();
        this.routes();

    }

    middlewares(){
        this.app.use(cors({
            origin: '*'
        }));
        this.app.use(express.json());
    }

    async connection(){
        try{
            
            await conectar();

        }catch(e){
            throw new Error(e);
        }
    }

    routes(){
     }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor escuchando en el http://localhost:${this.port}/`)
        });
    }
}

module.exports = {Server}