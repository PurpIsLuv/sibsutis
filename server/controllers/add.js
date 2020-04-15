const models = require('../associate/associate')


async function addCompetence(req,res){
    let competence = await models["Компетенция"].findOne({
        where: {
            "код_компетенции": req.body["код_компетенции"]
        },
    })
    if (competence){
        res.status(200).send({
            err: 'Компетенция существует'
        })
    }else{
        models["Компетенция"].create({
            "код_компетенции": req.body["код_компетенции"],
            "формулировка_компетенции": req.body["формулировка_компетенции"],
            "код_направления": req.body["код_направления"],
            "тип_компетенции": req.body["тип_компетенции"]
        })
        await res.status(200).send({
            msg: 'Компетенция добавлена'
        })
    }
}
/*
{
	"код_компетенции": "ОПК-3",
	"формулировка_компетенции": "Способен применять методы поиска, хранения, обработки, анализа и представления в требуемом формате информации из различных источников и баз данных, соблюдая при этом основные требования информационной безопасности",
	"код_направления": "11.03.02",
	"тип_компетенции": "Общепрофессиональные"
}
*/

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
/*
{
    "текст_задания": "Виды и параметры сигналов. Амплитудный спектр периодических сигналов. Уровни сигналов (децибелы). Затухание сигнала",
    "тип_задания": "Открытая форма",
}
*/

async function addResultTrainingZYV(req,res){
    let resultTrainingZYV = await models["Результаты_обучения_зув"].findOne({
        where: {
            "код_зув": req.body["код_зув"]
        },
    })
    if (resultTrainingZYV){
        res.status(200).send({
            msg: 'Результат обучения ЗУВ существует'
        })
    }else{
        models["Результаты_обучения_зув"].create({
            "код_зув": req.body["код_зув"],
            "формулировка_зув": req.body["формулировка_зув"],
            "тип_зув": req.body["тип_зув"]
        })
        res.status(200).send({
            msg: 'Результат обучения ЗУВ добавлен'
        })
    }
}
/*
{
    "код_зув": "З.1",
    "формулировка_зув": "Основные закономерности передачи информации в инфокоммуникационных системах, основные виды сигналов, используемых в телекоммуникационных системах",
    "тип_зув": "Знать"
}
*/

async function addDirection(req,res){
    let competence = await models["Компетенция"].findOne({
        where: {
            "код_направления": req.body["код_направления"]
        },
    })
    if (competence){
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
                "профиль_подготовки": req.body["профиль_подготовки"],
                "компетенцияId": competence.dataValues.id
            })
            res.status(200).send({
                msg: 'Направление добавлено'
            })
        }
    }else{
        res.status(200).send({
            msg: 'Добавьте компетенцию'
        })
    }
}


async function addAchievementIndicator(req,res){
    let competence = await models["Компетенция"].findOne({
        where: {
            "код_компетенции": req.body["код_компетенции"]
        },
    })
    if (competence){
        let achievementIndicator = await models["Индикаторы_достижения_компетенций"].findOne({
            where: {
                "код_индикатора": req.body["код_индикатора"]
            },
        })
        if (achievementIndicator){
            res.status(200).send({
                msg: 'Индикатор достижения компетенций существует'
            })
        }else{
            models["Индикаторы_достижения_компетенций"].create({
                "код_индикатора": req.body["код_индикатора"],
                "формулировка_индикатора": req.body["формулировка_индикатора"],
                "код_компетенции": req.body["код_компетенции"],
                "компетенцияId": competence.dataValues.id
            })
            res.status(200).send({
                msg: 'Индикатор достижения компетенций создан'
            })
        }
    }else{
        res.status(200).send({
            msg: 'Добавьте компетенцию'
        })
    }
}
/*
{
    "код_индикатора": "ОПК-3.1"
    "формулировка_индикатора": "Знать виды и параметры сигналов, способность преобразования чисел в различные системы счисления, применение знаний физики и математики при решении практических задач"
    "код_компетенции": "ОПК-3"
}
*/


async function addIndicatorZYV(req,res){
    let achievementIndicator = await models["Индикаторы_достижения_компетенций"].findOne({
        where: {
            "код_индикатора": req.body["код_индикатора"]
        },
    })
    let resultTrainingZYV = await models["Результаты_обучения_зув"].findOne({
        where: {
            "код_зув": req.body["код_зув"]
        },
    })
    if (achievementIndicator && resultTrainingZYV){
        let indicatorZYV = await models["Индикатор_зув"].findOne({
            where: {
                "код_зув": resultTrainingZYV.dataValues["код_зув"],
                "код_индикатора": achievementIndicator.dataValues["код_индикатора"],
            },
        })
        if (indicatorZYV){
            res.status(200).send({
                msg: 'Индикатор ЗУВ существует'
            })
        }else{
            await models["Индикатор_зув"].create({
                "код_зув": resultTrainingZYV.dataValues["код_зув"],
                "код_индикатора": achievementIndicator.dataValues["код_индикатора"],
                "индикаторыДостиженияКомпетенцийId": achievementIndicator.dataValues.id,
                "результатыОбученияЗувId": resultTrainingZYV.dataValues.id
            })
            await res.status(200).send({
                msg: 'Индикатор ЗУВ создан'
            })
        }  
    }else{
        if (!achievementIndicator){
            res.send({
                msg: 'Индикатора достижений не существует'
            })
        }
        if (!resultTrainingZYV){
            res.send({
                msg: 'Результата обучения не существует'
            })
        }
    }
}
/*
{
    "код_зув": "З.1",
    "код_индикатора": "ОПК-3.1" ,
}
*/


async function addIndistinctClassificationZYV(req,res){
    let resultTrainingZYV = await models["Результаты_обучения_зув"].findOne({
        where: {
            "код_зув": req.body["код_зув"]
        },
    })
    let task = await models["Контрольные_задания"].findOne({
        where: {
            "код_задания": req.body["код_задания"]
        },
    })
    if (task && resultTrainingZYV){
        let indistinctClassificationZYV = await models["Нечеткая_классфикация_зув"].findOne({
            where: {
                "код_задания": task.dataValues["код_задания"],
                "код_зув": resultTrainingZYV.dataValues["код_зув"]
            }
        })
        if (indistinctClassificationZYV){
            res.status(200).send({
                msg: 'Нечеткая классификация ЗУВ существует'
            })
        }else{
            models["Нечеткая_классфикация_зув"].create({
                "оценка_соответствия": req.body["оценка_соответствия"],
                "код_задания": task.dataValues["код_задания"],
                "код_зув": resultTrainingZYV.dataValues["код_зув"],
                "контрольныеЗаданияId": task.dataValues.id,
                "результатыОбученияЗувId": resultTrainingZYV.dataValues.id
            })
            res.status(200).send({
                msg: 'Нечеткая классификация ЗУВ добавлена'
            })
        }
    }else{
        if (!task){
            res.status(200).send({
                msg: 'Контрольного задания не существует'
            })
        }
        if (!resultTrainingZYV){
            res.status(200).send({
                msg: 'Результата обучения ЗУВ не существует'
            })
        }
    }
}
/*
{
    "оценка_соответствия": 1.00,
    "код_задания": 1,
    "код_зув": "3.1"
}
*/



module.exports = {
    addCompetence,//не зависит
    addResultTrainingZYV,//не зависит
    addTask,//не зависит

    addDirection,//зависит от компетенции
    addAchievementIndicator,//зависит от компетенции

    
    addIndicatorZYV,//зависит от результат обучения зув и индикатор достижений
    addIndistinctClassificationZYV,//зависит от результат обучения зув и контрольного задания  
}