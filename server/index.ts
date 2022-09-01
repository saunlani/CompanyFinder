import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import { routes } from './src/frameworks/webserver/routes'

const main = async () => {
  // create web server
  try {
    dotenv.config()
    const app = express()
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(cors())
    routes(app)
    app.listen(process.env.WEBSERVER_PORT, () => {
      console.log("Server now running on port", process.env.WEBSERVER_PORT)
    })
  }
  catch (error) {
    console.error("Failed to create server:", error)
  }
}
main()