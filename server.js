const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")

const { verify, authJWT } = require("./app/middleware")
const controller = require("./app/controllers/auth.controller")

const PORT = process.env.PORT || 5000

const app = express()
var corsOptions = {
  origin: "http://localhost:3000",
}

app.use(cors(corsOptions))
app.use(express.json())

app.use(
  cookieSession({
    name: "ol-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
)
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  )
  next()
})

const db = require("./app/models")
// db.sequelize.sync()

// Drop and re-sync db for development
db.sequelize.sync({ force: true })

//  create 2 rows in database (use in development only)
function initial() {
  Role.create({
    id: 1,
    name: "user",
  })

  Role.create({
    id: 2,
    name: "admin",
  })
}

// auth api routes
require("./app/routes/auth.routes")(app)

// admin api routs
require("./app/routes/customer.routes")(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
