<template>
    <section class="navbar container-fluid">
        <div class="navbar__fio col-4 offset-1">Иванов Иван Иванович</div>
        <div class="navbar__info col-5 offset-1">
            <div class="row">
                <span>11.03.11</span>
                <span>Инфокоммуникационные технологии и системы связи</span>
            </div>
            <div class="row">
                <span>Профиль:</span>
                <span>Инфокоммуникационные сети и системы</span>
            </div>
        </div>
        <div class="col-1"></div>
    </section>
</template>

<script>
export default {
    computed: {
        
    },
}
</script>

<style lang="scss">
    .navbar{
        background-color: blue;
        .navbar__fio{
            background-color: #fff;
        }
        .navbar__info{
            background-color: #fff;
        }
    }
</style>