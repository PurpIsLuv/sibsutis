const config = require('../config')

export default {
    state: {
        tasks: new Array(),
        resultTrainingZYV: new Array(),
        indicatorAchievement: new Array(),
        competence: new Object(),
    },
    actions: {
        async getStudentData(ctx){
            let response = await fetch(config.server + "/studentPageData",{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${sessionStorage.token}`
                },
            })
            let data = await response.json()
            ctx.commit('mutateStudentData',data)
        }
    },
    mutations: {
        async mutateStudentData(state,data){
            state.tasks = data["Контрольные_задания"]
            state.resultTrainingZYV = data["Результаты_обучения_ЗУВ"]
            state.indicatorAchievement = data["Индикаторы_достижения_компетенций"]
            state.competence = data["Компетенции"]
        }
    },
    getters: {
        gettersTasksData(state){
            return state.tasks
        },
        gettersScoresData(state){
            return {
                resultTrainingZYV: state.resultTrainingZYV,
                indicatorAchievement: state.indicatorAchievement,
                competence: state.competence,
            }
        }
    },
}