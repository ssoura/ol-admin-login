// module.exports = (app) => {
//   const { authJWT } = require("../middleware")
//   const customer = require("../controllers/customer.controller.js")
//   var router = require("express").Router()

//   // Create a new Customer
//   router.post("/", customer.create)

//   // Retrieve all Customers
//   router.get("/", customer.findAll)

//   // // Retrieve a single Customer with id
//   // router.get("/:id", customer.findOne);

//   // // Update a Customer with id
//   // router.put("/:id", customer.update);

//   // // Delete a Customer with id
//   // router.delete("/:id", customer.delete);

//   // // Delete all Customers
//   // router.delete("/", customer.deleteAll);

//   app.use("/api/customer", [authJWT.verifyToken, authJWT.isAdmin], router)
// }

const { authJWT } = require("../middleware")
const customer = require("../controllers/customer.controller")
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })
  app.post(
    "/api/admin",
    [authJWT.verifyToken, authJWT.isAdmin],
    customer.create
  )
}
