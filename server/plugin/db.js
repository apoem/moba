module.exports = (app) => {
               //防止以后用到app

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/moba',{ useNewUrlParser: true,useUnifiedTopology: true })

require('require-all')(__dirname + '/../models/')

}