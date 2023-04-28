
import express, {Application} from 'express';
import userRoutes from '../routes/users'
import cors from 'cors'
import { db } from '../db';

class Server {

    private app: Application ;
    private port: string;
    private paths = {
        users: '/kicks/users'
    }
    constructor(){
        this.app = express()
        this.port= process.env.PORT || '8000'
        this.connectDb()
        this.middlewares()
        this.routes()
    }

     async connectDb(){
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
     }
     middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
     }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`server is running at ${process.env.PORT}` )
        })
    }
    routes(){
        this.app.use(this.paths.users, userRoutes)
    }
    
}

export default Server