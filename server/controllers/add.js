const models = require('../associate/associate')


async function addDirection(req,res){
    let napravlenie = await models["Направление"].findOne({
        where:{
            "профиль_подготовки": req.body["профиль_подготовки"]
        },
    })
    if (napravlenie){
        res.status(203).send({
            err: 'Профиль подготовки существует'
        })
    }else{
        models["Направление"].create({
            "код_направления": req.body["код_направления"],
            "направление_подготовки": req.body["направление_подготовки"],
            "профиль_подготовки": req.body["профиль_подготовки"]
        })
        res.status(200).send({
            msg: 'Профиль подготовки добавлен'
        })
    }
}

async function addTask(req,res){
    let tasks = await models["Контрольные_задания"].findAll({})
    models["Контрольные_задания"].create({
        "код_задания": tasks.length + 1,
        "текст_задания": req.body["текст_задания"],
        "тип_задания": req.body["тип_задания"],
    })
    res.status(200).send({
        msg: 'Задание добавлено'
    })
}

module.exports = {
    addDirection,addTask,
}