const express = require('express')
const app = express()
const cors = require('cors')


const conf = require('./config/conf')
//MODELS
const student = require('./models/student')
const napravlenie = require('./models/napravlenie')

student.hasOne(napravlenie,{
    onDelete: 'cascade'
})

app.use(cors())
app.use(express.json())

app.get("",(req,res)=>{
    student.findAll()
    .then(data=>{
        data.getNapravlenie()
        .then(dat=>{
            res.send(data + " : " + dat)
        })
    })
})

app.post("/student",(req,res)=>{
    student.create({
        group_no: req.body.group_no,
        fio: req.body.fio,
        cod_napravleniya: req.body.cod_napravleniya,
    })
    .then(()=>res.send(req.body))
    .catch(err=>res.send(err))
})

app.post("/napravlenie",(req,res)=>{
    napravlenie.create({
        codNapravleniya: req.body.codNapravleniya,
        napravlenie_podgotovky: req.body.napravlenie_podgotovky,
        profile_podgotovky:req.body.profile_podgotovky,
    })
    .then(()=>res.send(req.body))
    .catch(err=>res.send(err))
})


app.listen(process.env.PORT || conf.port,()=>{
    console.log('Server Listen ' + conf.port)
    console.log('_______________________')
})

