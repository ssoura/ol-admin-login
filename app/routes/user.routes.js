const { authJwt } = require("../middleware");
const controllerAdmin = require("../controllers/admin.controller");
const controllerUser = require("../controllers/user.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user", controllerUser.allAccess);


  app.post(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controllerAdmin.create
  );

  app.get(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controllerAdmin.findAll
  );
};
