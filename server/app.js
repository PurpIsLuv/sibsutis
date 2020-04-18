const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

const config = require('./config/config')
const controllers = require('./controllers/controllers')


app.use(cors())
app.use(express.json())
app.use("/",express.static(path.join(__dirname,'../dist')))
app.use("/registration",express.static(path.join(__dirname,'../dist')))
app.use("/studentPageData",express.static(path.join(__dirname,'../dist')))
app.use("/teacherPageData",express.static(path.join(__dirname,'../dist')))
app.use("/admin",express.static(path.join(__dirname,'../dist')))
//for User
app.post("/registration",controllers.auth.reg)
app.post("/login",controllers.auth.login)
app.get("/regData",controllers.getData.regData)

app.get("/studentPageData",controllers.getData.studentPageData)
app.get("/teacherPageData",controllers.getData.teacherPageData)
//for admin
app.post("/checkAdmin",controllers.auth.admin)

app.post("/addCompetence",controllers.add.addCompetence)
app.post("/addDirection",controllers.add.addDirection)//+
app.post("/addAchievementIndicator",controllers.add.addAchievementIndicator)
app.post("/addResultTrainingZYV",controllers.add.addResultTrainingZYV)
app.post("/indistinctClassificationZYV",controllers.add.addIndistinctClassificationZYV)
app.post("/addIndicatorZYV",controllers.add.addIndicatorZYV)
app.post("/addTask",controllers.add.addTask)//+
app.post("/addVariable",controllers.add.addVariable)

app.listen(process.env.PORT || config.port,()=>{
    console.log('Server Listen ' + config.port)
    console.log('_______________________')
})

