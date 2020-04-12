const express = require('express')
const cors = require('cors')
const app = express()

const config = require('./config/config')
const controllers = require('./controllers/controllers')


app.use(cors())
app.use(express.json())


app.post("/registration",controllers.auth.reg)
app.post("/login",controllers.auth.login)
app.get("",(req,res)=>{
    res.send('TEST')
})


app.get("/addNapravlenie",controllers.add.addNapravlenie)



app.listen(process.env.PORT || config.port,()=>{
    console.log('Server Listen ' + config.port)
    console.log('_______________________')
})

