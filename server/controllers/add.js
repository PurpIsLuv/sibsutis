const models = require('../associate/associate')

function addUser(req,res){
    models.User.create({
        email: "and@gmail.com",
        password: "qwerty",
        type: "student"
    })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

function addStudent(req,res){
    models.Student.create({
        group_no: req.body.group_no,
        fio: req.body.fio,
        cod_napravleniya: req.body.cod_napravleniya,
        UserId: 1,
        NapravlenieId: 1
    })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

function addNapravlenie(req,res){
    models.Napravlenie.create({
        cod_napravleniya: "03.03.03",
        napravlenie_podgotovky: 'CheTo',
        profile_podgotovky: 'prifl'
    })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

function info(req,res){
    models.Napravlenie.findAll({
        include: [
            {model:models.Student}
        ],
    })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

module.exports = {
    addUser,
    addStudent,
    addNapravlenie,
    info,
}