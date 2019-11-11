module.exports = function(cmd, name) {
  let data;
  let c;
  let fc;
  switch (cmd) {
    case "controller":
      c = name.toString().split("C");
      fc = c[0].toLowerCase();
      data = `
      const Schema = require("./${fc}.schema");
      class ${name} {
            async index(req, res) {

              res.send(req.body);
            }
          }  
        module.exports = ${name};`;
      break;
    case "route":
      c = name.toString().split("C");
      fc = c[0].toLowerCase();
      data = `const ${name} = require('./${fc}.controller')
      const ${name.toString().toLowerCase()} = new ${name}()
            module.exports = [
            
                {
                    path:'/${fc}/:test',
                    method:'get',
                    controller: ${name.toString().toLowerCase()}.index,
                    request:{
                       
                    },
                    response:{
                        "callback":"body",
                        "status":"200"
                    }
                }
            ]`;
      break;

    case "schema":
      data = `const mongoose = require("mongoose");
        const Schema = mongoose.Schema
        
        var schemas = {}
        
        
        schemas.test = mongoose.model('Test', new Schema({

          role:String,
          data:{}
          
      })); 
        
        
        module.exports = schemas`;
  }

  return data;
};
