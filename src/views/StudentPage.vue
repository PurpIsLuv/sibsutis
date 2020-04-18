<template>
    <div class="UserPage">
        <div class="container-fluid">

            <section class="row topbar">
                <div class="navbar__fio col-4 offset-1">
                    {{name}}
                </div>
                <div class="navbar__info col-5 offset-1">
                    <div class="row">
                        <span>{{код_направления}}</span>
                        <span>{{направление_подготовки}}</span>
                    </div>
                    <div class="row">
                        <span>Профиль:</span>
                        <span>{{профиль_подготовки}}</span>
                    </div>
                </div>
                <div class="col-1"></div>
            </section>

            <section class="row">
                <ul class="navbar col-10 offset-1 d-flex justify-content-around">
                    <li 
                    v-for="(item,i) in navbarList" 
                    :key="i" 
                    @click="navClick(i)" 
                    :class="navbarListWidth" 
                    class="d-flex justify-content-center"
                    > 
                        {{item}}              
                    </li>
                </ul>
            </section>

            <section class="row justify-content-center" v-if="isActive.tasks">
                <table class="table col-10">
                    <tr class="attributes row">
                        <td class="attributes__item col-8">Задание</td>
                        <td class="attributes__item col-2">Тип</td>
                        <td class="attributes__item col-2">Оценка</td>
                    </tr>
                    <div class="lines">
                        <tr class="d-flex line" v-for="(task,i) in tasks" :key="i">
                            <td class="line__item col-8">
                                {{task["текст_задания"]}}
                            </td>
                            <td class="line__item col-2">
                                {{task["тип_задания"]}}
                            </td>
                            <td class="line__item col-2">8</td>
                        </tr>
                    </div> 
                </table> 
            </section>

            <section class="row justify-content-center" v-if="isActive.zyv">
                <table class="table col-10">
                    <tr class="attributes row">
                        <td class="attributes__item col-2">ЗУВ</td>
                        <td class="attributes__item col-6">Формулировка</td>
                        <td class="attributes__item col-2">Оценка D</td>
                        <td class="attributes__item col-2">Оценка F</td>
                    </tr>
                    <div class="lines">       
                        <tr class="d-flex line" v-for="(resultTrainingZYV,i) in scoresData.resultTrainingZYV" :key="i">
                            <td class="line__item col-2">
                                {{resultTrainingZYV["код_зув"]}}
                            </td>
                            <td class="line__item col-6">
                                {{resultTrainingZYV["формулировка_зув"]}}
                            </td>
                            <td class="line__item col-2">5,00</td>
                            <td class="line__item col-2">Высокий</td>
                        </tr>
                    </div>     
                </table> 
            </section>

            <section class="row justify-content-center" v-if="isActive.indicator">
                <table class="table col-10">
                    <tr class="attributes row">
                        <td class="attributes__item col-2">Код индикатора</td>
                        <td class="attributes__item col-8">Формулировка</td>
                        <td class="attributes__item col-2">Оценка</td>
                    </tr>
                    <div class="lines">       
                        <tr class="d-flex line" v-for="(indicatorAchievement,i) in scoresData.indicatorAchievement" :key="i">
                            <td class="line__item col-2">
                                {{indicatorAchievement["код_индикатора"]}}
                            </td>
                            <td class="line__item col-8">
                                {{indicatorAchievement["формулировка_индикатора"]}}
                            </td>
                            <td class="line__item col-2">10</td>
                        </tr>
                    </div>     
                </table> 
            </section>

            <section class="row justify-content-center" v-if="isActive.competence">
                <table class="table col-10">
                    <tr class="attributes row">
                        <td class="attributes__item col-2">Код компетенций</td>
                        <td class="attributes__item col-8">Формулировка</td>
                        <td class="attributes__item col-2">Оценка</td>
                    </tr>
                    <div class="lines">       
                        <tr class="d-flex line" v-for="(indicatorAchievement,i) in scoresData.indicatorAchievement" :key="i">
                            <td class="line__item col-2">
                                {{scoresData.competence["код_компетенции"]}}
                            </td>
                            <td class="line__item col-8">
                                {{scoresData.competence["формулировка_компетенции"]}}
                            </td>
                            <td class="line__item col-2">8</td>
                        </tr>
                    </div>     
                </table> 
            </section>

            
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {
            name: '',
            "код_направления": '',
            "направление_подготовки": '',
            "профиль_подготовки": '',
            navbarList: ['Задания','ЗУВ','Индикатор','Компетенция'],
            isActive: {
                tasks: true,
                zyv: false,
                indicator: false,
                competence: false,
            },
        }
    },
    methods: {
        ...mapActions(['getStudentData']),
        ...mapGetters(['gettersTasksData','gettersScoresData']),
        navClick(index){
            switch (index) {
                case 0:
                    this.isActive.tasks = true
                    this.isActive.zyv = false
                    this.isActive.indicator = false
                    this.isActive.competence = false
                    break;
                case 1:
                    this.isActive.tasks = false
                    this.isActive.zyv = true
                    this.isActive.indicator = false
                    this.isActive.competence = false
                    break;
                case 2:
                    this.isActive.tasks = false
                    this.isActive.zyv = false
                    this.isActive.indicator = true
                    this.isActive.competence = false
                    break;
                case 3:
                    this.isActive.tasks = false
                    this.isActive.zyv = false
                    this.isActive.indicator = false
                    this.isActive.competence = true
                    break;
            }
        }
    },
    computed:{
        navbarListWidth: function(){
            return `col-${12/this.navbarList.length}` 
        },
        tasks: function(){
            return this.gettersTasksData()
        },
        scoresData: function(){
            return this.gettersScoresData()
        },
    },
    created(){
        this.getStudentData()
    },
    mounted(){ 
        if (sessionStorage["ФИО"]){
            this.name = sessionStorage["ФИО"]
        }
        if (sessionStorage["код_направления"]){
            this["код_направления"] = sessionStorage["код_направления"]     
        }
        if (sessionStorage["направление_подготовки"]){
            this["направление_подготовки"] = sessionStorage["направление_подготовки"]
        }
        if (sessionStorage["профиль_подготовки"]){
            this["профиль_подготовки"] = sessionStorage["профиль_подготовки"]
        }
    },

    /*
    <section class="row justify-content-center" v-if="isActive.tasks">
                <div class="table col-10">
                    <ul class="attributes row">
                        <li class="attributes__item col-8">Задание</li>
                        <li class="attributes__item col-2">Тип</li>
                        <li class="attributes__item col-2">Оценка</li>
                    </ul>
                    <ul class="lines">
                        <li class="d-flex line" v-for="(task,i) in tasks" :key="i">
                            <div class="line__item col-8">
                                {{task["текст_задания"]}}
                            </div>
                            <div class="line__item col-2">
                                {{task["тип_задания"]}}
                            </div>
                            <div class="line__item col-2">8</div>
                        </li>
                    </ul> 
                </div> 
            </section>
    */
}
</script>

<style lang="scss">
    .UserPage{
        .topbar{
            background-color: #01448b;
            color: #fff;
            padding: 5px 0;
            .navbar__fio{
                font-size: 30px;
            }
            .navbar__info{
                div{
                    span{
                        margin-left: 10px;
                    }
                }
            }
        }

        .navbar{
            color: #fff;
            li{
                padding: 10px 0;
                background-color: rgba($color: #01448b, $alpha: .5);     
            }    
            li:hover{
                background-color: rgba($color: #01448b, $alpha: .8);
            }
        }

        .table{
            border-radius: 10px;
            ::-webkit-scrollbar {
                width: 12px;
            }
            ::-webkit-scrollbar-track {
                background-color: rgba($color: #01448b, $alpha: 0.5);
                border-radius: 3px;
            }           
            ::-webkit-scrollbar-thumb {
                background-color: rgba($color: #01448b, $alpha: 0.7);
                border-radius: 3px;
            }
            .attributes{
                font-size: 25px;
                color: #01448b;
                margin-right: 12px;
                margin-left: 0px;
                border-radius: 5px;
                .attributes__item{
                    display: flex;
                    justify-content: center;
                }
            }
            .lines{
                background-color: #fff;
                height: 50vh;
                overflow-y: scroll;
                .line{
                    border-radius: 5px;
                    margin-top: 10px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    .line__item{
                        color: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #01448b;
                    }
                }
            }
        }
    }
</style>