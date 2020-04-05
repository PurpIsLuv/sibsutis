const models = require('../associate/associate')


function registration(req,res){
    models.User.findOne({
        where: {
            email: req.body.email
        },
    })
    .then(person=>{
        if (person){
            res.send('Sysh')
        }else{
            models.User.create({
                email: req.body.email,
                password: req.body.password,
                type: req.body.type
            })
            .then(user=>{
                models.Student.create({
                    group_no: req.body.group_no,
                    fio: req.body.fio,
                    cod_napravleniya: req.body.cod_napravleniya,
                    UserId: user.dataValues.id,
                    NapravlenieId: 1
                })
                .then(()=>{
                    res.send('Create')
                })
                .catch(err=>res.send(err))
            })
            .catch(err=>res.send(err))
        }
    })
}

function authorization(req,res){
    models.User.findOne({
        where: {
            email: req.body.email
        },
    })
    .then(user=>{
        if (user){
            if (user.password == req.body.password){
                res.send('Password success')
            }else{
                res.send('Password error')
            }
        }else{
            res.send('User not found')
        }
    })
}

/* 
REG
{
	"email": "qwer@gmai.com",
	"password": "hash",
	"type": "student",
	"group_no": "II862",
	"fio": "Andrey",
	"cod_napravleniya": "03.03"
}
AUTH
{
	"email": "qwer@gmai.com",
	"password": "hash",
}
*/

module.exports = {
    registration,
    authorization,
}