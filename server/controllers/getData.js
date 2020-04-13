const models = require('../associate/associate')

async function regData(req,res){
    let data = new Array()
    let napravleniya = await models["Направление"].findAll({})
    for (let i=0;i<napravleniya.length;i++){
        data.push(napravleniya[i].dataValues)
    }
    res.send(data)
}

module.exports = {
    regData
}