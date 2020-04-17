<template>
    <div class="Teacher page">
        <section class="navbar container-fluid">
            <div class="navbar__fio col-4 offset-1"></div>
            <div class="navbar__info col-5 offset-1">Первичные результаты суждения экспертов</div>
            <div class="col-1"></div>
        </section>
        <Table/>
    </div>
</template>

<script>
import Table from '../components/teacher/Table'
export default {
    components:{
        Table
    },
}
</script>

<style lang="scss">
    section{
        margin-bottom: 20px;
    }
</style>