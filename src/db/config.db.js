const mongoose = require('mongoose')
const { DB_URL } = require('../config/globals')

const dbConnection = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('conected ' +  DB_URL)
    }
    catch (err) {
        console.log(err)
        throw new Error
    }
}

module.exports = {dbConnection}