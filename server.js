const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 5000

const app = express()
var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(express.json())

const db = require("./models");
// db.sequelize.sync()

// Drop and re-sync db for development
db.sequelize.sync({ force: true });

app.get("/", (req, res) => {
    res.json({ message: 'Hi, Welcome to application.'})
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})