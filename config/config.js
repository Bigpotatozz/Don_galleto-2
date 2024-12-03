const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

let conexion = new Sequelize(process.env.NOMBRE_DB, process.env.USUARIO_DB, process.env.CONTRASENIA_DB, {
    host: process.env.HOST,
    dialect: 'mysql'
});


 const conectar = async () => {
    try{

        await conexion.authenticate();
        console.log('Conexión exitosa');


    }catch(e){
        console.log(e);
        throw new Error('Error al conectar a la base de datos');
    }
 };

 module.exports = {conexion, conectar};