const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("./user.model.js")(sequelize, Sequelize)
db.role = require("./role.model.js")(sequelize, Sequelize)
db.customer = require("./customer.model.js")(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
})
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
})
db.ROLES = ["user", "admin", "moderator"]

module.exports = db
