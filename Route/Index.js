import { Router } from 'express'
import Controller from '../Controller/Index.js'

const { Homepage } = Controller

// Router
const router = Router()

// Homepage
router.route('/').get(Homepage.getHomepage)

export default router
