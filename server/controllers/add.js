const models = require('../associate/associate')


function addNapravlenie(req,res){
    models["Направление"].create({
        "код_направления": '111',
        "направление_подготовки": 'test',
        "профиль_подготовки": 'xaxa'
    })
    .then(()=>{
        res.send("addNapravlenie")
    })
    .catch(err=>{
        res.send(err)
    })
}

module.exports = {
    addNapravlenie,
}