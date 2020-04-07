const models = require('../associate/associate')


function addNapravlenie(req,res){
    models.Направление.create({
        код_направления: '02.05.01',
        направление_подготовки: 'Цифровое телерадиовещание',
        профиль_подготовки: 'Системы радиосвязи, мобильной связи и радиодоступа'
    })
    .then(()=>{
        res.send("addNapravlenie")
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
            res.send('addDisciplina')
        })
        .catch(err=>res.send(err))
    })
    .catch(err=>res.send(err))
}
/*

{
    "код_направления": "02.05.01",
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
            res.send('addCompetencia')
        })
        .catch(err=>res.send(err))
    })
    .catch(err=>res.send(err))
}

/*
{
    "код_направления": "10.13.00",
    "код_компетенции": "ОПК-3",
    "формулировка_компетенции": "Способен применять методы поиска, хранения, обработки, анализа и представления в требуемом формате информации из различных источников и баз данных, соблюдая при этом основные требования информационной безопасности",
    "тип_компетенции": "Общепрофессиональные",
} 
*/

function addIndicator(req,res){
    models.Компетенция.findOne({
        where: {
            код_компетенции: req.body.код_компетенции
        },
    })
    .then(competenciya=>{
        console.log(competenciya.dataValues)
        res.send('OK')
        models.Индикаторы_достижения_компетенций.create({
            код_индикатора: req.body.код_индикатора,
            формулировка_индикатора: req.body.формулировка_индикатора,
            код_компетенции: competenciya.dataValues.код_компетенции,
            компетенцияId: competenciya.dataValues.id
        })
        .then(()=>{
            res.send('addIndicator')
        })
        .catch(err=>res.send(err))
    })
}

/*
{
    "код_индикатора": "ОПК-3.2",
    "формулировка_индикатора": "Уметь использовать базовые средства обеспечения информационной безопасности, формировать перечень мер и средств по защите информации",
    "код_компетенции": "ОПК-3"
}
*/

function info(req,res){
    models.Компетенция.findAll({
        include: [
            {model:models.Индикаторы_достижения_компетенций}
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
    addIndicator,
}