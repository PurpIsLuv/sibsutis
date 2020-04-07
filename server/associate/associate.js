/////MODELS//////
const models = {}
models.Пользователь = require('../models/user')
models.Студент = require('../models/student')
models.Направление = require('../models/napravlenie')
models.Учебные_дисциплины = require('../models/uchebnieDiscipliny')
models.Компетенция = require('../models/competencia')
models.Индикаторы_достижения_компетенций = require('../models/indicatoryDostizheniyaCompetenciy')
//////ASSOCIATE///////
models.Пользователь.hasOne(models.Студент,{onDelete:'cascade'})
models.Направление.hasMany(models.Студент,{onDelete:'cascade'})
models.Направление.hasOne(models.Учебные_дисциплины,{onDelete:'cascade'})
models.Направление.hasOne(models.Компетенция,{onDelete:'cascade'})
models.Компетенция.hasOne(models.Индикаторы_достижения_компетенций,{onDelete:'cascade'})
module.exports = models