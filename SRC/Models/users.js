var mongoose = require('mongoose')

var fields = {
    name: {type: String}, 
    lastName: {type: String},
    email: {type: String}, 
    phone: {type: String}, 
    mobile: {type: String}
}

var userschema = new mongoose.Schema(fields)

module.exports = mongoose.model('users', userschema)