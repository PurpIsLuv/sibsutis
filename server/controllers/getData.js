const models = require('../associate/associate')
const jwt = require('../services/jwt')


async function regData(req,res){
    let data = new Array()
    let napravleniya = await models["Направление"].findAll({})
    for (let i=0;i<napravleniya.length;i++){
        data.push(napravleniya[i].dataValues)
    }
    res.send(data)
}

async function studentPageData(req,res){
    jwt.verifyToken(req,res)
    if (req.decodedTokenId){
        let student = await models["Студент"].findOne({
            where: {
                "пользовательId": req.decodedTokenId
            },
        })
        ///Find in DB
        let napravlenie = await models["Направление"].findOne({
            where: {
                id: student.dataValues["направлениеId"]
            },
        })
        ///Find in DB



        let competence = await models["Компетенция"].findOne({
            where: {
                id: napravlenie.dataValues["компетенцияId"]
            },
        })
        ///Find in DB


        let achievementIndicator = await models["Индикаторы_достижения_компетенций"].findAll({
            where: {
                "компетенцияId": napravlenie.dataValues["компетенцияId"]
            },
        })
        ///Find in DB


        let updAchievementIndicator = new Array()
        let updIndicatorZYV = new Array()
        for (let i=0;i<achievementIndicator.length;i++){
            updAchievementIndicator.push(achievementIndicator[i].dataValues)
            let indicatorZYV = await models["Индикатор_зув"].findAll({
                where: {
                    "код_индикатора": updAchievementIndicator[i]["код_индикатора"]
                },
            })    
            for(let j=0;j<indicatorZYV.length;j++){
                updIndicatorZYV.push(indicatorZYV[j].dataValues)    
            }       
        }
        let newIndicatorZYV = new Array()
        newIndicatorZYV.push(updIndicatorZYV[0])
        for (let i=0;i<updIndicatorZYV.length;i++){
            let flag = false
            for (let j=0;j<newIndicatorZYV.length;j++){
                if (updIndicatorZYV[i]["код_зув"] == newIndicatorZYV[j]["код_зув"]){
                    flag = true
                }
            }    
            if (flag == false){
                newIndicatorZYV.push(updIndicatorZYV[i])
            }
        }
        ///Find in DB


        let updResultTrainingZYV = new Array()
        let updIndistinctClassificationZYV = new Array()
        for (let i=0;i<newIndicatorZYV.length;i++){
            let indistinctClassificationZYV = await models["Нечеткая_классфикация_зув"].findAll({
                where: {
                    "код_зув": newIndicatorZYV[i]["код_зув"]
                },
            })
            for (let j=0;j<indistinctClassificationZYV.length;j++){
                updIndistinctClassificationZYV.push(indistinctClassificationZYV[j].dataValues)
            }

            let resultTrainingZYV = await models["Результаты_обучения_зув"].findOne({
                where: {
                    "код_зув": newIndicatorZYV[i]["код_зув"]
                },
            })
            updResultTrainingZYV.push(resultTrainingZYV.dataValues)
        }
        let newIndistinctClassificationZYV = new Array()
        newIndistinctClassificationZYV.push(updIndistinctClassificationZYV[0])
        for (let i=1;i<updIndistinctClassificationZYV.length;i++){
            let flag = false
            for (let j =0;j<newIndistinctClassificationZYV.length;j++){
                if (newIndistinctClassificationZYV[j]["код_задания"] == updIndistinctClassificationZYV[i]["код_задания"]){
                    flag = true
                }
            }
            if (flag == false){
                newIndistinctClassificationZYV.push(updIndistinctClassificationZYV[i])
            }
        }
        ///Find in DB


        let tasks = new Array()
        for (let i=0;i<newIndistinctClassificationZYV.length;i++){
            let task = await models["Контрольные_задания"].findOne({
                where: {
                    "код_задания": newIndistinctClassificationZYV[i]["код_задания"]
                },
            })
            tasks.push(task.dataValues)
        }
        ///Find in DB


        res.send({
            "Контрольные_задания": tasks,
            "Результаты_обучения_ЗУВ": updResultTrainingZYV,
            "Индикаторы_достижения_компетенций":updAchievementIndicator,
            "Компетенции": competence.dataValues,
        })     
    }
}

module.exports = {
    regData,
    studentPageData,
}