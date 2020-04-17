const config = require('../config')
import router from '../router'

export default {
    state: {
        variables: new Array()
    },
    actions: {
        async getTeacherData(ctx){
            let response = await fetch(config.server + '/teacherPageData',{
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${sessionStorage.token}`
                },
            })
            let data = await response.json()
            if (response.status == 203){
                router.push('/')
                alert('Авторизуйтесь повторно')
            }
            if (response.status == 200){
                ctx.commit('mutateTeacherData',data)
            }
        },
    },
    mutations: {
        mutateTeacherData(state,data){
            state.variables = data.variable
        }
    },
    getters: {
        getterTeacherData(state){
            return state.variables
        }
    },
}