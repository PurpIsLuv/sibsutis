const express = require('express')
const cors = require('cors')
const app = express()

const config = require('./config/config')
const controllers = require('./controllers/controllers')


app.use(cors())
app.use(express.json())

//for User
app.post("/registration",controllers.auth.reg)
app.post("/login",controllers.auth.login)
app.get("/regData",controllers.getData.regData)


//for admin
app.post("/addDirection",controllers.add.addDirection)
app.post("/addTask",controllers.add.addTask)


app.listen(process.env.PORT || config.port,()=>{
    console.log('Server Listen ' + config.port)
    console.log('_______________________')
})

