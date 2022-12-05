// Dependencies
import 'winston-mongodb'
import { createLogger, transports, format } from 'winston'
import Config from '../Config/Index.js'
import Util from '../Util/Index.js'

const { DATABASE_URL } = Config
const { Quicker } = Util

const packageConfig = Util.Quicker.loadJSON(`../package.json`)
const timeZone = Quicker.generateLocaleString()
const dbLogsCollection = `serverlogs`

// Logger Object
const Logger = createLogger({
    transports: [
        // File Logs
        new transports.File({
            filename: `${packageConfig.name}.log`,
            level: `info`,
            format: format.combine(format.timestamp({ format: timeZone }), format.json())
        }),
        // Console Logs
        new transports.Console({
            level: `info`,
            format: format.combine(format.timestamp({ format: timeZone }), format.json())
        }),
        // Database Logs
        new transports.MongoDB({
            level: `info`,
            db: DATABASE_URL,
            options: {
                useUnifiedTopology: true
            },
            collection: dbLogsCollection,
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

// Exporting Logger
export default Logger
