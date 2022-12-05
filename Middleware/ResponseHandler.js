import Config from '../Config/Index.js'
import Service from '../Service/Index.js'

const { DEBUG } = Config
const { Logger } = Service

export default (err, req, res, _) => {
    const response = {
        success: err.success || false,
        status: err.status || 500,
        urlPath: err.path || req.path,
        message: err.message || ``,
        data: err.data || null
    }

    Logger.info(`${req.method} - ${req.originalUrl} - ${req.ip}`)
    if (response.status === 500) {
        Logger.error(`Error --> ${response.message}`)
        if (DEBUG === `false`) {
            response.message = `Something went wrong`
        }
    }

    res.status(response.status).json(response)
}
