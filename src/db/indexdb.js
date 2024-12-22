const mongoose = require('mongoose')
require('dotenv').config()
const {DB_NAME} = require('../constants')

const connectDB = async () => {
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected successfully to DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGO DB ERROR"+error)
    }
}

module.exports = connectDB
