const UserController = require('./user.controller')
      const usercontroller = new UserController()
            module.exports = [
            
                {
                    path:'/user/:test',
                    method:'get',
                    controller: usercontroller.index,
                    request:{
                       
                    },
                    response:{
                        "callback":"body",
                        "status":"200"
                    }
                }
            ]