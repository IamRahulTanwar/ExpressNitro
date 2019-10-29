const UserController = require("../controllers/UserController");
const usercontroller = new UserController();
module.exports = [
  {
    path: "/usercontroller/:test",
    method: "get",
    controller: usercontroller.index,
    request: {},
    response: {
      callback: "body",
      status: "200"
    }
  }
];
