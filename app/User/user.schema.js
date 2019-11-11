const mongoose = require("mongoose");
        const Schema = mongoose.Schema
        
        var schemas = {}
        
        
        schemas.test = mongoose.model('Test', new Schema({

          role:String,
          data:{}
          
      })); 
        
        
        module.exports = schemas