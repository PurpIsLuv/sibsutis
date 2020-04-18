<template>
    <div class="AdminPage">
        <div class="container-fluid">

            <section class="row" id="Task">              
                <textarea name="" id="" cols="30" rows="1" v-model="taskText" placeholder="текст_задания"></textarea>
                <select name="" id="" v-model="taskType">
                    <option value="Открытая форма">Открытая форма</option>
                    <option value="Текстовое задание">Текстовое задание</option>
                </select>
                <button @click="addTask">Добавить задание</button>              
            </section>

            <section class="row" id="Direction">              
                <input type="text" placeholder="код_направления" v-model="directionCode">
                <input type="text" placeholder="направление_подготовки" v-model="directionPreparation">
                <input type="text" placeholder="профиль_подготовки" v-model="profilePreparation">
                <button @click="addDirection">Добавить направление</button>              
            </section>

            <section class="row" id="Competence">
                <input type="text" placeholder="код_компетенции">
                <textarea name="" id="" cols="30" rows="1" placeholder="формулировка_компетенции"></textarea>
                <input type="text" placeholder="код_направления">
                <input type="text" placeholder="тип_компетенции">
                <button @click="addCompetence">Добавить компетенцию</button>
            </section>

        </div>    
    </div>
</template>

<script>
const config = require('../config')
import router from '../router'
export default {
    data(){
        return{
            taskType: '',
            taskText: '',
            directionCode: '',
            directionPreparation: '',
            profilePreparation: ''
        }
    },
    methods:{
        async addTask(){
            let response = await fetch(config.server + '/addTask',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "текст_задания": this.taskText,
                    "тип_задания": this.taskType,
                }),
            })
            let data = await response.json()
            await alert(data.msg)
        },
        async addDirection(){
            let response = await fetch(config.server + '/addDirection',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "код_направления": this.directionCode,
                    "направление_подготовки": this.directionPreparation,
                    "профиль_подготовки": this.profilePreparation
                })
            })
            let data = await response.json()
            if (response.status == 200){
                await alert(data.msg)
            }else if(response.status == 203){
                await alert(data.err)
            }
        },
        async addCompetence(){
            let competence = document.getElementById('Competence')
            let inputs = competence.getElementsByTagName('input')
            let textAreas = competence.getElementsByTagName('textarea')
            let response = await fetch(config.server + '/addCompetence',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "код_компетенции": inputs[0].value,
                    "формулировка_компетенции": textAreas[0].value,
                    "код_направления": inputs[1].value,
                    "тип_компетенции": inputs[2].value
                })
            })
            let data = await response.json()
            if (response.status == 200){
                alert(data.msg)
            }
        }
    },
    async created(){
        let password = prompt('password')
        let response = await fetch(config.server + '/checkAdmin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password
            })
        })
        let data = await response.json()
        if (data.msg == 'Верный пароль'){
            //True
        }else{
            router.push('/')
        }
    }
}
</script>

<style lang="scss">
    
</style>