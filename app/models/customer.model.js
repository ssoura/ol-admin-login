module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      // Attributes
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
    })
    return Customer
  }
  