/////MODELS//////
const models = {}
models.User = require('../models/user')
models.Student = require('../models/student')
models.Napravlenie = require('../models/napravlenie')
//////ASSOCIATE///////
models.User.hasOne(models.Student,{onDelete:'cascade'})
models.Napravlenie.hasMany(models.Student,{onDelete:'cascade'})

module.exports = models