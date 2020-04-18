<template>
    <div class="UserPage">
        <div class="container-fluid">

            <section class="row topbar">
                <div class="navbar__fio col-4 offset-1">
                    
                </div>
                <div class="navbar__info col-5 offset-1">
                    <div class="row">
                        <span>Первичные результаты суждения экспертов</span>
                    </div>
                </div>
                <div class="col-1"></div>
            </section>

            <section class="row justify-content-center">
                <table class="table col-10">
                    <tr class="attributes row">
                        <td class="col-2">Переменная</td>
                        <td class="col-8">Формулировка переменной</td>
                        <td class="col-2">Оценка</td>
                    </tr>
                    <div class="lines">       
                        <tr class="d-flex line" v-for="(variable,i) in variables" :key="i">
                            <td class="line__item col-2">
                                {{variable["переменная"]}}
                            </td>
                            <td class="line__item col-8">
                                {{variable["формулировка"]}}
                            </td>
                            <td class="line__item col-2">Высокий</td>
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

/*
<section class="navbar container-fluid">
            <div class="navbar__fio col-4 offset-1"></div>
            <div class="navbar__info col-5 offset-1">Первичные результаты суждения экспертов</div>
            <div class="col-1"></div>
        </section>
        <Table/>
*/
</script>

<style lang="scss">
    
</style>