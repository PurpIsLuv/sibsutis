const bcryptjs = require('bcryptjs')
const config = require('../config')
import router from '../router'


export default {
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
            let response = await fetch(config.server + '/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody,
            })
            let data = await response.json()
            if (response.status == 200){
                //student
                if (data["тип"] == 'Студент'){
                    router.push("/student")
                    sessionStorage.setItem("ФИО",data["ФИО"])
                    sessionStorage.setItem("код_направления",data["код_направления"])
                    sessionStorage.setItem("направление_подготовки",data["направление_подготовки"])
                    sessionStorage.setItem("профиль_подготовки",data["профиль_подготовки"])
                }else if (data["тип"] == 'Преподаватель'){
                    router.push("/teacher")
                }
            }else if (response.status == 203){
                alert(data.err)
            }
        },


        async checkRegistration(ctx,{
            fio,email,type,профиль_подготовки,password,номер_группы,код_направления,направление_подготовки}){
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
            let response = await fetch(config.server + '/registration',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody,
            })

            let data = await response.json()
            if (response.status == 201){
                if (type == 'Студент'){
                    router.push("/student")
                    sessionStorage.setItem("ФИО",fio)
                    sessionStorage.setItem("код_направления",код_направления)
                    sessionStorage.setItem("направление_подготовки",направление_подготовки)
                    sessionStorage.setItem("профиль_подготовки",профиль_подготовки)
                }else if (type == 'Преподаватель'){
                    router.push("/teacher")
                }
            }else if (response.status == 203){
                alert(data.err)
            }
            
        }
    },
    mutations: {

    },
    getters: {

    },
}