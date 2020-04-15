<template>
    <div class="ocenka container-fluid">
        <div class="d-flex justify-content-around">

            <div class="table col-5">
                <ul class="d-flex">
                    <li class="col-2">ЗУВ</li>
                    <li class="col-6">Формулировка</li>
                    <li class="col-2">Оценка D</li>
                    <li class="col-2">Оценка F</li>
                </ul>
                <ul>       
                    <li class="d-flex" v-for="(resultTrainingZYV,i) in scoresData.resultTrainingZYV" :key="i">
                        <div class="col-2">
                            {{resultTrainingZYV["код_зув"]}}
                        </div>
                        <div class="col-6">
                            {{resultTrainingZYV["формулировка_зув"]}}
                        </div>
                        <div class="col-2">5,00</div>
                        <div class="col-2">Высокий</div>
                    </li>
                </ul>     
            </div>  

            <div class="table col-5">
                <ul class="d-flex">
                    <li class="col-2">Код индикатора</li>
                    <li class="col-8">Формулировка</li>
                    <li class="col-2">Оценка</li>
                </ul>
                <ul>       
                    <li class="d-flex" v-for="(indicatorAchievement,i) in scoresData.indicatorAchievement" :key="i">
                        <div class="col-2">
                            {{indicatorAchievement["код_индикатора"]}}
                        </div>
                        <div class="col-8">
                            {{indicatorAchievement["формулировка_индикатора"]}}
                        </div>
                        <div class="col-2">10</div>
                    </li>
                </ul>     
            </div>  

        </div>

        <div class="d-flex justify-content-around">
            <div class="table col-5">
                <ul class="d-flex">
                    <li class="col-2">Код компетенций</li>
                    <li class="col-8">Формулировка</li>
                    <li class="col-2">Оценка</li>
                </ul>
                <ul>       
                    <li class="d-flex">
                        <div class="col-2">
                            {{scoresData.competence["код_компетенции"]}}
                        </div>
                        <div class="col-8">
                            {{scoresData.competence["формулировка_компетенции"]}}
                        </div>
                        <div class="col-2">8</div>
                    </li>
                </ul>     
            </div> 

            <div class="table col-7">
                <ul class="d-flex">
                    <li class="col-2">Код компетенций</li>
                    <li class="col-5">Формулировка</li>
                    <li class="col-2">Код направления</li>
                    <li class="col-3">Тип компетенции</li>
                </ul>
                <ul>       
                    <li class="d-flex">
                        <div class="col-2">ОПК-3</div>
                        <div class="col-5">Способен применять методы поиска, хранения, обработки, анализа и представления в </div>
                        <div class="col-2">11.03.02</div>
                        <div class="col-3">Общепрофессиональные</div>
                    </li>
                </ul>     
            </div> 
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    methods: {
        ...mapGetters(['gettersScoresData'])
    },
    computed: {
        scoresData: function(){
            console.log(this.gettersScoresData())
            return this.gettersScoresData()
        },
    },
}
</script>

<style lang="scss">
    .ocenka{
        margin-top: 20px;
        .table{
            background-color: #fff;
            margin-top: 20px;
            border: solid;
            li{
                font-size: 15px;
            }
        }
        
    }
</style>