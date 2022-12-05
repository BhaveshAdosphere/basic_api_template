import mongoose from 'mongoose'
import Logger from './Logger.js'
import Config from '../Config/Index.js'

const { DATABASE_URL } = Config

export default {
    connect: async () => {
        try {
            await mongoose.connect(DATABASE_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            Logger.info(`Success, Database Connected Successfully.`)
            return
        } catch (err) {
            throw err
        }
    }
}
