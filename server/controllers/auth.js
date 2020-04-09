const models = require('../associate/associate')


function registration(req,res){
    models.Пользователь.findOne({
        where: {
            почта: req.body.почта
        },
    })
    .then(person=>{
        if (person){
            res.send('Sysh')
        }else{
            models.Пользователь.create({
                "почта": req.body["почта"],
                "пароль": req.body["пароль"],
                "тип": req.body["тип"]
            })
            .then(user=>{
                models.Направление.findOne({
                    where: {
                        код_направления: req.body.код_направления
                    },
                })
                .then(napravlenie=>{
                    models.Студент.create({
                        номер_группы: req.body.номер_группы,
                        фио: req.body.фио,
                        код_направления: req.body.код_направления,
                        пользовательId: user.dataValues.id,
                        направлениеId: napravlenie.dataValues.id
                    })
                    .then(()=>{
                        res.send('Create')
                        console.log(user.dataValues)
                        console.log(napravlenie.dataValues)
                    })
                    .catch(err=>res.send(err))
                })
            })
            .catch(err=>res.send(err))
        }
    })
}

function authorization(req,res){
    models.Пользователь.findOne({
        where: {
            почта: req.body.почта
        },
    })
    .then(user=>{
        if (user){
            if (user.пароль == req.body.пароль){
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
	"почта": "Rock@gmail.com",
	"пароль": "Rock",
	"тип": "student",
	"номер_группы": "PP2",
	"фио": "Rock",
	"код_направления": "11.03.02"
}
AUTH
{
	"почта": "qwer@gmai.com",
	"пароль": "hash",
}
*/

module.exports = {
    registration,
    authorization,
}