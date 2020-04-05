const models = require('../associate/associate')


function registration(req,res){
    models.User.create({
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    })
    .then(user=>{
        /*models.Student.create({
            group_no: req.body.group_no,
            fio: req.body.fio,
            cod_napravleniya: req.body.cod_napravleniya,
            UserId: user.id,
            NapravlenieId: 1
        }) */res.send(user)
    })
    .catch(err=>res.send(err))
    
}

module.exports = {
    registration
}