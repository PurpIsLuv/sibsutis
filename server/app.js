const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./config/config')
const controllers = require('./controllers/controllers')



app.use(cors())
app.use(express.json())

app.get("/addNapravlenie",controllers.add.addNapravlenie)
app.get("",controllers.add.info)
app.post("/reg",controllers.auth.registration)
app.post("/auth",controllers.auth.authorization)
app.post("/addDisciplina",controllers.add.addDisciplina)
app.post("/addCompetencia",controllers.add.addCompetencia)

app.listen(process.env.PORT || config.port,()=>{
    console.log('Server Listen ' + config.port)
    console.log('_______________________')
})

