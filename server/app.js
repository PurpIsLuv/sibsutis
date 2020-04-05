const express = require('express')
const app = express()
const cors = require('cors')
const conf = require('./config/conf')
const controller = require('./controllers/auth')

app.use(cors())
app.use(express.json())

//app.get("/addUser",controller.addUser)

//app.get("/addStudent",controller.addStudent)

//app.get("/addNapravlenie",controller.addNapravlenie)

//app.get("",controller.info)

app.post("/reg",controller.registration)

app.listen(process.env.PORT || conf.port,()=>{
    console.log('Server Listen ' + conf.port)
    console.log('_______________________')
})

