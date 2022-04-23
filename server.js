const express = require("express")
const cors = require("cors")
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()
var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(express.json())

const db = require("./app/models")
// db.sequelize.sync()

// Drop and re-sync db for development
db.sequelize.sync({ force: true })

app.get("/", (req, res) => {
    res.json({ message: 'Hi, Welcome to application.'})
})

// api routes
require("./app/routes/customer.routes")(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})