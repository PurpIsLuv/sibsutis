<template>
    <div class="AdminPage">
        <div class="container-fluid">

            <section class="request row justify-content-center" id="Task">              
                <div class="request__item">
                    <textarea name="" id="" cols="30" rows="1" v-model="taskText" placeholder="текст_задания" class="form-control"></textarea>
                </div>
                <div class="request__item">
                    <select name="" id="" v-model="taskType" class="form-control">
                        <option value="Открытая форма">Открытая форма</option>
                        <option value="Текстовое задание">Текстовое задание</option>
                    </select>
                </div>
                <div class="request_item">
                    <button @click="addTask" class="btn btn-success">Добавить задание</button>   
                </div>           
            </section>

            <section class="request row justify-content-center" id="Direction">              
                <div class="request__item">
                    <input type="text" placeholder="код_направления" v-model="directionCode" class="form-control">
                </div>
                <div class="request__item">
                    <input type="text" placeholder="направление_подготовки" v-model="directionPreparation" class="form-control">
                </div>
                <div class="request__item">
                    <input type="text" placeholder="профиль_подготовки" v-model="profilePreparation" class="form-control">
                </div>
                <div class="request__item">
                    <button @click="addDirection" class="btn btn-success">Добавить направление</button>   
                </div>           
            </section>


            <section class="request row justify-content-center" id="Competence">
                <div class="request__item">
                    <input type="text" placeholder="код_компетенции" class="form-control"> 
                </div>  
                <div class="request__item">
                    <textarea name="" id="" cols="30" rows="1" placeholder="формулировка_компетенции" class="form-control"></textarea>
                </div>  
                <div class="request__item">
                    <input type="text" placeholder="код_направления" class="form-control">  
                </div>  
                <div class="request__item">
                    <input type="text" placeholder="тип_компетенции" class="form-control">  
                </div>  
                <div class="request__item">
                    <button @click="addCompetence" class="btn btn-success">Добавить компетенцию</button>  
                </div>                
            </section>

            <section class="request row justify-content-center" id="ResultTrainignZYV">
                <div class="request__item">
                    <input type="text" placeholder="код_зув" class="form-control">
                </div>
                <div class="request__item">
                    <textarea name="" id="" cols="30" rows="1" placeholder="формулировка_зув" class="form-control"></textarea>
                </div>
                <div class="request__item">
                    <input type="text" placeholder="тип_зув" class="form-control">
                </div>
                <div class="request__item">
                    <button @click="addResultTrainingZYV" class="btn btn-success">Добавить результат обучения ЗУВ</button>
                </div> 
            </section>

            <section class="request row justify-content-center" id="Variable">
                <div class="request__item">
                    <input type="text" placeholder="функции_принадлежности" class="form-control">
                </div>
                <div class="request__item">
                    <textarea name="" id="" cols="30" rows="1" placeholder="формулировка" class="form-control"></textarea>
                </div>
                <div class="request__item">
                    <button @click="addVariable" class="btn btn-success">Добавить переменную</button>
                </div> 
            </section>

            <section class="request row justify-content-center" id="AchievementIndicator">
                <div class="request__item">
                    <input type="text" placeholder="код_индикатора" class="form-control">
                </div> 
                <div class="request__item">
                    <textarea name="" id="" cols="30" rows="1" placeholder="формулировка_индикатора" class="form-control"></textarea>
                </div> 
                <div class="request__item">
                    <input type="text" placeholder="код_компетенции" class="form-control">
                </div> 
                <div class="request__item">
                    <button @click="addAchievementIndicator" class="btn btn-success">Добавить индикатор достижений</button>
                </div>   
            </section>

            <section class="request row justify-content-center" id="IndicatorZYV">
                <div class="request__item">
                    <input type="text" placeholder="код_зув" class="form-control">
                </div>
                <div class="request__item">
                    <input type="text" placeholder="код_индикатора" class="form-control">
                </div>
                <div class="request__item">
                    <button @click="addIndicatorZYV" class="btn btn-success">Добавить индикатор ЗУВ</button>
                </div>
            </section>

            <section class="request row justify-content-center" id="IndistinctClassificationZYV">
                <div class="request__item">
                    <input type="text" placeholder="оценка_соответствия" class="form-control">
                </div>
                <div class="request__item">
                    <input type="text" placeholder="код_задания" class="form-control">
                </div>
                <div class="request__item">
                    <input type="text" placeholder="код_зув" class="form-control">
                </div>
                <div class="request__item">
                    <button @click="addIndistinctClassificationZYV" class="btn btn-success">Добавить нечеткую классификацию ЗУВ</button>
                </div>
            </section>

        </div>    
    </div>
</template>

<style lang="scss">
    
</style>

<script>
const config = require('../config')
import router from '../router'
import $ from 'jquery'
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
        },
        async addResultTrainingZYV(){
            let resultTrainingZYV = document.getElementById('ResultTrainignZYV')
            let inputs = resultTrainingZYV.getElementsByTagName('input')
            let textAreas = resultTrainingZYV.getElementsByTagName('textarea')
            let response = await fetch(config.server + '/addResultTrainingZYV',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "код_зув": inputs[0].value,
                    "формулировка_зув": textAreas[0].value,
                    "тип_зув": inputs[1].value,
                })
            })
            let data = await response.json()
            if (response.status == 200){
                alert(data.msg)
            }
        },
        async addVariable(){
            let variable = document.getElementById('Variable')
            let inputs = variable.getElementsByTagName('input')
            let textAreas = variable.getElementsByTagName('textarea')
            let response = await fetch(config.server + '/addVariable',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "функции_принадлежности": inputs[0].value,
                    "формулировка": textAreas[0].value
                })
            })
            let data = await response.json()
            if (response.status == 200){
                alert(data.msg)
            }else{
                console.log(data)
            }
        },
        async addAchievementIndicator(){
            let achievementIndicator = document.getElementById('AchievementIndicator')
            let inputs = achievementIndicator.getElementsByTagName('input')
            let textAreas = achievementIndicator.getElementsByTagName('textarea')
            let response = await fetch(config.server + '/addAchievementIndicator',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "код_индикатора": inputs[0].value,
                    "формулировка_индикатора": textAreas[0].value,
                    "код_компетенции": inputs[1].value,
                })
            })
            let data = await response.json()
            if (response.status == 200){
                alert(data.msg)
            }else{
                console.log(data)
            }
        },
        async addIndicatorZYV(){
            let indicatorZYV = document.getElementById('IndicatorZYV')
            let inputs = indicatorZYV.getElementsByTagName('input')
            let response = await fetch(config.server + '/addIndicatorZYV',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "код_зув": inputs[0].value,
                    "код_индикатора": inputs[1].value ,
                })
            })
            let data = await response.json()
            if (response.status == 200){
                alert(data.msg)
            }else{
                console.log(response)
            }
        },
        async addIndistinctClassificationZYV(){
            let indistinctClassificationZYV = document.getElementById('IndistinctClassificationZYV')
            let inputs = indistinctClassificationZYV.getElementsByTagName('input')
            let response = await fetch(config.server + '/addIndistinctClassificationZYV',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "оценка_соответствия": inputs[0].value,
                    "код_задания": inputs[1].value,
                    "код_зув": inputs[2].value,
                })
            })
            let data = await response.json()
            if (response.status == 200){
                alert(data.msg)
            }else{
                console.log(response)
            }
        },
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

