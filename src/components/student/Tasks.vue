<template>
    <section class="container-fluid">
        <div class="tasks col-8">
            <ul class="d-flex">
                <li class="col-8">Задание</li>
                <li class="col-2">Тип</li>
                <li class="col-2">Оценка</li>
            </ul>
            <ul>
                <li class="d-flex task" v-for="(task,i) in tasks" :key="i">
                    <div class="task col-8">
                        {{task["текст_задания"]}}
                    </div>
                    <div class="type col-2">
                        {{task["тип_задания"]}}
                    </div>
                    <div class="assessment col-2">8</div>
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
    section{
        margin-top: 20px;
    }
    .tasks{
        background-color: #fff;
        .task{
            margin-top: 20px;
        }
    }
</style>