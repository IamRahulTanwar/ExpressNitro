
      const Schema = require("./user.schema");
      class UserController {
            async index(req, res) {

              res.send(req.body);
            }
          }  
        module.exports = UserController;