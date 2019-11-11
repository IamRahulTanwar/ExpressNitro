const exportRoutes = [];

let routes = [require("./app/User/user.routes")];

routes.filter(route => {
  exportRoutes.push(...route);
});

module.exports = exportRoutes;
