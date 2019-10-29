module.exports = function(cmd, name) {
  let data ;
  switch (cmd) {
    case "controller":
      data = `class ${name} {
            async index(req, res) {

              res.send(req.body);
            }
          }  
        module.exports = ${name};`;
        break;
    case "route":
      data=  `const ${name} = require('../controllers/${name}')
            const ${name.toString().toLowerCase()} = new ${name}()
            module.exports = [
            
                {
                    path:'/${name.toString().toLowerCase()}/:test',
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

            
  }


  return data;

};
