
import dotenv from  'dotenv';
import Server from './models/server.js'

dotenv.config(); 

//crear el servidor en el puerto 3000

const server = new Server();

server.listen();

//puerto
