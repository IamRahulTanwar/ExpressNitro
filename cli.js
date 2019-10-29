const cmd = process.argv.slice(2);
const createFile = require("create-file");
const cli = require("./cli/index");

if (cmd[0] === "make:controller") {
  let routeName = cmd[1].toString().split("C");
  routeName = routeName[0].toString().toLowerCase();

  let controller = cli("controller", cmd[1]);
  let route = cli("route", cmd[1]);

  createFile(`./controllers/${cmd[1]}.js`, controller, function(err) {
    if (!err) {
      createFile(`./routes/${routeName}.routes.js`, route, function(err) {
        if (!err) {
          console.log({
            Status: "File Created",
            Controller: `${cmd[1]}.js`,
            Route: `${routeName}.routes.js`
          });
        }
      });
    }
  });
}
