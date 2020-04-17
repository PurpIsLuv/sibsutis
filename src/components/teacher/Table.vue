<template>
    <div class="d-flex justify-content-center">
        <div class="table col-8">
            <ul class="d-flex">
                <li class="col-2">Переменная</li>
                <li class="col-8">Формулировка переменной</li>
                <li class="col-2">Оценка</li>
            </ul>
            <ul>       
                <li class="d-flex" v-for="(variable,i) in variables" :key="i">
                    <div class="col-2">
                        {{variable["переменная"]}}
                    </div>
                    <div class="col-8">
                        {{variable["формулировка"]}}
                    </div>
                    <div class="col-2">Высокий</div>
                </li>
            </ul>     
        </div> 
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
    methods: {
        ...mapActions(['getTeacherData']),
        ...mapGetters(['getterTeacherData'])
    },
    computed: {
        variables: function(){
            return this.getterTeacherData()
        }
    },
    created(){
        this.getTeacherData()
    },
}
</script>

<style lang="scss">
    .Table{
        background-color: #fff;
        margin-top: 30px;
    }
</style>