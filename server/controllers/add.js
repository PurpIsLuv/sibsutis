const models = require('../associate/associate')


function addNapravlenie(req,res){
    models.Направление.create({
        код_направления: '11.03.02',
        направление_подготовки: 'Инфокоммуникационные технологии и системы связи',
        профиль_подготовки: 'Транспортные сети и системы связи'
    })
    .then(napr=>{
        res.send("OK")

        /*
        models.Учебные_дисциплины.create({
            наименование_дисциплины: 'axa',
            форма_контроля: 'from',
            код_направления: '10.03',
            направлениеId: 1
        })
        .then(ych=>{
            models.Компетенция.create({
                код_компетенции: 'cod',
                формулировка_компетенции: 'formula',
                код_направления: '10.03',
                тип_компетенции: 'type',
                направлениеId: 1
            })
            .then(()=>{
                res.send('OK')
            })
            .catch(err=>{
                res.send(err)
            })
        })
        .catch(err=>{
            res.send(err)
        })
        */
    })
    .catch(err=>{
        res.send(err)
    })
}

function addDisciplina(req,res){
    models.Направление.findOne({
        where: {
            код_направления: req.body.код_направления
        },
    })
    .then(napr=>{
        models.Учебные_дисциплины.create({
            id_дисциплины: req.body.id_дисциплины,
            наименование_дисциплины: req.body.наименование_дисциплины,
            форма_контроля: req.body.форма_контроля,
            код_направления: napr.dataValues.код_направления,
            направлениеId: napr.dataValues.id
        })
        .then(()=>{
            res.send('OK')
        })
        .catch(err=>res.send(err))
    })
    .catch(err=>res.send(err))
}
/*

{
    "код_направления": "03.03.03",
    "id_дисциплины": "Б1.О.24",
    "наименование_дисциплины": "Основы телекоммуникаций",
    "форма_контроля": "экзамен"
}       

*/

function addCompetencia(req,res){
    models.Направление.findOne({
        where: {
            код_направления: req.body.код_направления
        },
    })
    .then(napr=>{
        models.Компетенция.create({
            код_компетенции: req.body.код_компетенции,
            формулировка_компетенции: req.body.формулировка_компетенции,
            код_направления: napr.dataValues.код_направления,
            тип_компетенции: req.body.тип_компетенции,
            направлениеId: napr.dataValues.id
        })
        .then(()=>{
            res.send('OK')
        })
        .catch(err=>res.send(err))
    })
    .catch(err=>res.send(err))
}

/*
{
    "код_направления": "11.03.02"
    "код_компетенции": "ОПК-3",
    "формулировка_компетенции": "Способен применять методы поиска, хранения, обработки, анализа и представления в требуемом формате информации из различных источников и баз данных, соблюдая при этом основные требования информационной безопасности",
    "тип_компетенции": "Общепрофессиональные",
} 
*/

function info(req,res){
    models.Направление.findAll({
        include: [
            {model:models.Компетенция}
        ],
        order: [ [ 'id', 'ASC' ] ],
    })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

module.exports = {
    addNapravlenie,
    info,
    addDisciplina,
    addCompetencia,
}