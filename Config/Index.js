import dotenv from 'dotenv'
dotenv.config()

const { DEBUG, PORT, DATABASE_URL } = process.env

export default {
    DEBUG: DEBUG.toLowerCase(),
    PORT,
    DATABASE_URL
}
