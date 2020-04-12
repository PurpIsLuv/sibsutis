const bcryptjs = require('bcryptjs')


module.exports = {
    state: {
        email: '',
        password: '',
    },
    actions: {
        async checkLogin(ctx,{email,password}){
            let saltRounds =  10
            let salt = bcryptjs.genSaltSync(saltRounds)
            let hash = bcryptjs.hashSync(password,salt)
            let data = await fetch('http://192.168.100.12:8081/login',{
                method: 'POST',
                body: {
                    "почта": email,
                    "пароль": hash
                },
            })
            console.log(data)
        },
        async checkRegistration(ctx,{
            fio,email,type,код_направления,password,group_no}){
            let saltRounds =  10
            let salt = bcryptjs.genSaltSync(saltRounds)
            let hash = bcryptjs.hashSync(password,salt)
            let data = await fetch('http://192.168.100.12:8081/registration',{
                method: 'POST',
                body: {
                    "почта": email,
                    "пароль": hash,
                    "тип": type,
                    "номер_группы": group_no,
                    "ФИО": fio,
                    "код_направления": код_направления
                },
            })
            console.log(data)
        }
    },
    mutations: {

    },
    getters: {

    },
}