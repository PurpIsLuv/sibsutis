/////MODELS//////
const models = {}
models.Пользователь = require('../models/user')
models.Студент = require('../models/student')
models.Направление = require('../models/napravlenie')
models.Учебные_дисциплины = require('../models/uchebnieDiscipliny')
models.Компетенция = require('../models/competencia')
//////ASSOCIATE///////
models.Пользователь.hasOne(models.Студент,{onDelete:'cascade'})
models.Направление.hasMany(models.Студент,{onDelete:'cascade'})
models.Направление.hasOne(models.Учебные_дисциплины,{onDelete:'cascade'})
models.Направление.hasOne(models.Компетенция,{onDelete:'cascade'})
module.exports = models