import Constant from '../Constant/Index.js'

const { responseString } = Constant

export default {
    200: (req, data = null) => ({
        success: true,
        status: 200,
        path: req.path,
        message: responseString.success,
        data
    }),
    201: (req, data = null) => ({
        success: true,
        status: 201,
        path: req.path,
        message: responseString.created,
        data
    }),
    400: (req, message = ``, data = null) => ({
        success: false,
        status: 400,
        path: req.path,
        message: message || responseString.badRequest,
        data
    }),
    401: (req, message = ``, data = null) => ({
        success: false,
        status: 401,
        path: req.path,
        message: message || responseString.unauthorized,
        data
    }),
    403: (req, message = ``, data = null) => ({
        success: false,
        status: 403,
        path: req.path,
        message: message || responseString.alreadyExist,
        data
    }),
    404: (req, message = ``, data = null) => ({
        success: false,
        status: 404,
        path: req.path,
        message: message || responseString.notFound,
        data
    }),
    422: (req, err, data = null) => ({
        success: false,
        status: 422,
        path: req.path,
        message: err.message || responseString.validationError,
        data
    }),
    500: (req, err, data = null) => ({
        success: false,
        status: 500,
        path: req.path,
        message: err.stack || err.message || responseString.somethingWentWrong,
        data
    })
}
