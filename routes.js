const exportRoutes = [];

let routes = [
require('./routes/user.routes')
];

routes.filter(route => {
  exportRoutes.push(...route);
});

module.exports = exportRoutes;
