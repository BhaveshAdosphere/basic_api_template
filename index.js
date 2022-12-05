// Dependencies
import path from 'path'
import helmet from 'helmet'
import express from 'express'
import { fileURLToPath } from 'url'
import Util from './Util/Index.js'
import Route from './Route/Index.js'
import Config from './Config/Index.js'
import Service from './Service/Index.js'
import Middleware from './Middleware/Index.js'

// Variables
const { Response } = Util
const { PORT = 5001 } = Config
const { ResponseHandler } = Middleware
const { Database, Logger } = Service

// App Definition
const app = express()

// Common Middlewares
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), `Public`)))

// API Routing Middleware
app.use('/api/v1', Route)

// 404 Middleware
app.use((req, _, next) => {
    next(Response[404](req))
})

// Error Handling Middleware
app.use(ResponseHandler)

// Server
const server = app.listen(PORT)
;(async () => {
    try {
        await Database.connect()
        Logger.info(`Listening on port : ${PORT}`)
    } catch (error) {
        Logger.error(`Error --> ${error.stack || error.message}`)
        server.close((err) => {
            Logger.info(`Application process terminated...`)
            process.exit(err ? 1 : 0)
        })
    }
})()
