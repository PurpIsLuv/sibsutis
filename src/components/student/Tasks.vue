<template>
    <section class="row justify-content-center">
        <div class="table col-10">
            <ul class="attributes row">
                <li class="attributes__item col-8">Задание</li>
                <li class="attributes__item col-2">Тип</li>
                <li class="attributes__item col-2">Оценка</li>
            </ul>
            <ul class="tasks">
                <li class="d-flex task" v-for="(task,i) in tasks" :key="i">
                    <div class="task__item col-8 d-flex align-items-center justify-content-center">
                        {{task["текст_задания"]}}
                    </div>
                    <div class="task__item col-2 d-flex align-items-center justify-content-center">
                        {{task["тип_задания"]}}
                    </div>
                    <div class="task__item col-2 d-flex align-items-center justify-content-center">8</div>
                </li>
            </ul> 
        </div> 
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    methods: {
        ...mapGetters(['gettersTasksData'])
    }, 
    computed: {
        tasks: function(){
            return this.gettersTasksData()
        }
    },
}
</script>

<style lang="scss" scoped>
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
            font-size: 30px;
            color: #01448b;
            margin-right: 12px;
            margin-left: 0px;
            border-radius: 5px;
        }
        .tasks{
            background-color: #fff;
            height: 50vh;
            overflow-y: scroll;
            .task{
                background-color: #01448b;
                border-radius: 5px;
                margin-top: 10px;
                padding-top: 10px;
                padding-bottom: 10px;
                .task__item{
                    color: #fff;
                }
            }
        }
    }

    
</style>