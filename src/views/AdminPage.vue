<template>
    <div>

        <div class="row">
            <textarea name="" id="" cols="30" rows="10" v-model="taskText" placeholder="текст_задания"></textarea>
            <select name="" id="" v-model="taskType">
                <option value="Открытая форма">Открытая форма</option>
                <option value="Текстовое задание">Текстовое задание</option>
            </select>
            <button @click="addTask">Добавить задание</button>
        </div>

        <div class="row">
            <input type="text" placeholder="код_направления" v-model="directionCode">
            <input type="text" placeholder="направление_подготовки" v-model="directionPreparation">
            <input type="text" placeholder="профиль_подготовки" v-model="profilePreparation">
            <button @click="addDirection">Добавить направление</button>
        </div>

    </div>
</template>

<script>
const config = require('../config')

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
    },
}
</script>

<style lang="scss">
    
</style>