const bcryptjs = require('bcryptjs')


module.exports = {
    state: {
        email: '',
        password: '',
    },
    actions: {
        async checkLogin(ctx,{email,password}){
            let requestBody = JSON.stringify({
                "почта": email,
                "пароль": password
            })
            let response = await fetch('http://192.168.100.12:8081/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody,
            })
            let data = await response.json()
            console.log(data)
        },


        async checkRegistration(ctx,{
            fio,email,type,профиль_подготовки,password,номер_группы}){
            let saltRounds =  10
            let salt = bcryptjs.genSaltSync(saltRounds)
            let hash = bcryptjs.hashSync(password,salt)
            let requestBody = JSON.stringify({
                "почта": email,
                "пароль": hash,
                "тип": type,
                "номер_группы": номер_группы,
                "ФИО": fio,
                "профиль_подготовки": профиль_подготовки,
            })
            let response = await fetch('http://localhost:8081/registration',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody,
            })
            let data = await response.json()
            console.log(data)
        }
    },
    mutations: {

    },
    getters: {

    },
}