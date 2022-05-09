const express = require("express")
const cors = require("cors")
const {sequelize} = require("./models")
const config = require("./config/config")
const bodyParser = require("body-parser")

const corsOptions= {
    origin: 'http://localhost:8081'
}

const app = express()
app.use(bodyParser.json())
app.use(cors(corsOptions))
require("./routes")(app)
app.get("/",(req,res) =>{
    res.send({
        message: "Welcome into the API"
    })
})


sequelize.sync().then(() => {
    app.listen(process.env.PORT || 8080)
    console.log(`Server started on port ${config.port}`)
})