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

app.get("/studentPageData",controllers.getData.studentPageData)

//for admin


app.post("/addCompetence",controllers.add.addCompetence)
app.post("/addDirection",controllers.add.addDirection)
app.post("/addAchievementIndicator",controllers.add.addAchievementIndicator)
app.post("/addResultTrainingZYV",controllers.add.addResultTrainingZYV)
app.post("/indistinctClassificationZYV",controllers.add.addIndistinctClassificationZYV)
app.post("/addIndicatorZYV",controllers.add.addIndicatorZYV)

app.post("/addTask",controllers.add.addTask)


app.listen(process.env.PORT || config.port,()=>{
    console.log('Server Listen ' + config.port)
    console.log('_______________________')
})

