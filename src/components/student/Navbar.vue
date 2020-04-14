<template>
    <section class="navbar container-fluid">
        <div class="navbar__fio col-4 offset-1">{{name}}</div>
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
</template>

<script>
export default {
    computed: {
        
    },
    data(){
        return {
            name: '',
            "код_направления": '',
            "направление_подготовки": '',
            "профиль_подготовки": '',
        }
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