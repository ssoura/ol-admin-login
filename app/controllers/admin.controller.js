const db = require("../models")
const Customer = db.customer
const Op = db.Sequelize.Op

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!",
    })
    return
  }
  // Create a Customer
  const customer = {
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
  }
  // Save Customer in the database
  Customer.create(customer)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      })
    })
}
// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Customer.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Customers.",
      })
    })
}
