const cmd = process.argv.slice(2);
const createFile = require("create-file");
const cli = require("./cli/index");

if (cmd[0] === "make:controller") {
  let routeName = cmd[1].toString().split("C");
  routeName = routeName[0];
  let appName = routeName.toString().toLowerCase();

  let controller = cli("controller", cmd[1]);
  let route = cli("route", cmd[1]);
  let schema = cli("schema", cmd[1]);

  createFile(
    `./app/${routeName}/${appName}.controller.js`,
    controller,
    function(err) {
      if (!err) {
        createFile(`./app/${routeName}/${appName}.routes.js`, route, function(
          err
        ) {
          if (!err) {
            createFile(
              `./app/${routeName}/${appName}.schema.js`,
              schema,
              function(err) {
                if (!err) {
                  console.log({
                    Status: "Created",
                    Controller: `${routeName}/${appName}.controller.js`,
                    Route: `${routeName}/${appName}.routes.js`,
                    Schema: `${routeName}/${appName}.schema.js`
                  });
                }
              }
            );
          }
        });
      }
    }
  );
}
