module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    password: {
      type: Sequelize.STRING,
    },
  })

  return User
}
