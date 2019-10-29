const mongoose = require("mongoose");
const Schema = mongoose.Schema

var schemas = {}


schemas.user = mongoose.model('Users', new Schema({

    role:String,
    data:{}
    
})); 

schemas.request = mongoose.model('Request',new Schema({
    type:String,
    users:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
      },
    data:{}
}))


module.exports = schemas