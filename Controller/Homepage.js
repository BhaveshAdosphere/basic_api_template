import Util from '../Util/Index.js'

const { Response } = Util

export default {
    getHomepage: (req, _, next) => {
        try {
            return next(Response[200](req))
        } catch (err) {
            return next(Response[500](req, err))
        }
    }
}
