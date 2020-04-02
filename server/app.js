const express = require('express')
const app = express()
const cors = require('cors')

const conf = require('./config/conf')

const {student, direction} = require('./models')


app.use(cors())
//app.use(express.json())


app.get("",(req,res)=>{
    res.send("Server listen")
})

app.post("/student/:no_group/:fio/:direction_code",(req,res)=>{
    student.create({
        no_group: req.params.no_group,
        fio: req.params.fio,
        direction_code: req.params.direction_code,
    })
    .then(()=>{
        res.send('Пользователь создан')
    })
    .catch(err=>{
        res.send(err)
    })

})

app.post("/direction/:direction_Code/:direction_preparation/:profile_preparation",(req,res)=>{
    direction.create({
        direction_Code: req.params.direction_Code,
        direction_preparation: req.params.direction_preparation,
        profile_preparation: req.params.profile_preparation
    })
    .then(()=>{
        res.send('direcion create')
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/student',(req,res)=>{
    student.findAll()
    .then(data=>{
        direction.findOne({
            where: {
                direction_Code: data[0].direction_code
            },
        })
        .then(data=>{
            res.send(data)
        })
    })
})

app.listen(process.env.PORT || conf.port,()=>{
    console.log('Server Listen')
    console.log('_______________________')
})


/* 

direction.belongsTo(models.student,{
    foreignKey: 'direction_code',
    target_key: 'direction_Code',
})
student.hasMany(models.direction,{
    foreignKey: 'direction_Code'
})

*/