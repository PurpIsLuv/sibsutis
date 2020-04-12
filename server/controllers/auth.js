const models = require('../associate/associate')
const jwt = require('../services/jwt')
const bcryptjs = require('bcryptjs')

async function reg(req,res){
    let person = await models["Пользователь"].findOne({
        where: {
            "почта": req.body["почта"]
        }
    })
    if (person){
        res.status(203).send("User exist")
    }else{
        let user = await models["Пользователь"].create({
            "почта": req.body["почта"],
            "пароль": req.body["пароль"],
            "тип": req.body["тип"]
        })
        let token = jwt.createToken(user)
        let napravlenie = await models["Направление"].findOne({
            where: {
                "код_направления": req.body["код_направления"]
            }
        })
        let students = await models["Студент"].findAll()
        await models["Студент"].create({
            "id_студента": students.length + 1,
            "номер_группы": req.body["номер_группы"],
            "ФИО": req.body["ФИО"],
            "код_направления": req.body["код_направления"],
            "пользовательId": user.dataValues.id,
            "направлениеId": napravlenie.dataValues.id
        })
        res.status(201).send({
            msg: "User created",
            token
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
        if (bcryptjs.compareSync(req.body["пароль"],user["пароль"])){
            let token = jwt.createToken(user)
            res.status(202).send({
                msg: "Password success",
                token
            })
        }else{
            res.status(203).send("Password error")
        }
    }else{
        res.status(204).send("User not found")
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

module.exports = {
    reg,
    login,
}