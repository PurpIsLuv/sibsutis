const models = require('../associate/associate')
const jwt = require('../services/jwt')
const bcryptjs = require('bcryptjs')
const config = require('../config/config')


async function reg(req,res){
    let person = await models["Пользователь"].findOne({
        where: {
            "почта": req.body["почта"]
        }
    })
    if (person){
        res.status(203).send({
            err: "Пользователь существует"
        })
    }else{
        let user = await models["Пользователь"].create({
            "почта": req.body["почта"],
            "пароль": req.body["пароль"],
            "тип": req.body["тип"]
        })
        let token = jwt.createToken(user)
        if (req.body["тип"] == 'Студент'){
            let napravlenie = await models["Направление"].findOne({
                where: {
                    "профиль_подготовки": req.body["профиль_подготовки"]
                }
            })
            let students = await models["Студент"].findAll()
            await models["Студент"].create({
                "id_студента": students.length + 1,
                "номер_группы": req.body["номер_группы"],
                "ФИО": req.body["ФИО"],
                "код_направления": napravlenie.dataValues["код_направления"],
                "пользовательId": user.dataValues.id,
                "направлениеId": napravlenie.dataValues.id
            })  
        }
        res.status(201).send({
            msg: "User created",
            token,
        })
    }
}

async function login(req,res){
    let user = await models.Пользователь.findOne({
        where: {
            "почта": req.body["почта"]
        }
    })
    if (user){
        let token = jwt.createToken(user)
        if (bcryptjs.compareSync(req.body["пароль"],user["пароль"])){
            if (user.dataValues["тип"] == 'Студент'){
                let student = await models["Студент"].findOne({
                    where: {
                        "пользовательId": user.dataValues.id
                    },
                })
                let napravlenie = await models["Направление"].findOne({
                    where: {
                        id: student.dataValues["направлениеId"]
                    }
                })
                res.status(200).send({
                    msg: "Password success",
                    token,
                    "тип": user.dataValues["тип"],
                    "ФИО": student.dataValues["ФИО"],
                    "код_направления": napravlenie.dataValues["код_направления"],
                    "направление_подготовки": napravlenie.dataValues["направление_подготовки"],
                    "профиль_подготовки": napravlenie.dataValues["профиль_подготовки"]
                })
            }else if(user.dataValues["тип"] == 'Преподаватель'){
                res.status(200).send({
                    msg: "Password success",
                    token,
                    "тип": user.dataValues["тип"]
                })
            }
        }else{
            res.status(203).send({
                err: "Неправильный пароль",
            })
        }
    }else{
        res.status(203).send({
            err: "Пользователь не найден",
        })
    }
}

/* 
REG
{
	"почта": "Rock@gmail.com",
	"пароль": "Rock",
	"тип": "student",
	"номер_группы": "PP2",
	"ФИО": "Rock",
	"код_направления": "11.03.02"
}
AUTH
{
	"почта": "qwer@gmai.com",
	"пароль": "hash",
}
*/
 
async function admin(req,res){
    if (config.adminPassword == req.body.password){
        res.send({
            msg: 'Верный пароль'
        })
    }else{
        res.send({
            msg: 'Не верный пароль'
        })
    }
}

module.exports = {
    reg,
    login,
    admin,
}