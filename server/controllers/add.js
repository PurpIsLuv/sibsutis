const models = require('../associate/associate')


function addNapravlenie(req,res){
    models["Направление"].create({
        "код_направления": '11.03.02',
        "направление_подготовки": 'Инфокоммуникационные технологии и системы связи',
        "профиль_подготовки": 'Защищенные сети связи'
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