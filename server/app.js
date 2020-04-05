const express = require('express')
const cors = require('cors')
const app = express()
const conf = require('./config/conf')
const controllers = require('./controllers/controllers')



app.use(cors())
app.use(express.json())


app.get("/addUser",controllers.add.addUser)
app.get("/addStudent",controllers.add.addStudent)
app.get("/addNapravlenie",controllers.add.addNapravlenie)
app.get("",controllers.add.info)
app.post("/reg",controllers.auth.registration)
app.post("/auth",controllers.auth.authorization)


app.listen(process.env.PORT || conf.port,()=>{
    console.log('Server Listen ' + conf.port)
    console.log('_______________________')
})

