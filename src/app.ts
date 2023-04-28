import dotenv from 'dotenv'
import Server from './models/server'
import { db } from './db'
dotenv.config()

const server = new Server()





db.sync({ force: true }).then(() => {
    server.listen()
  });