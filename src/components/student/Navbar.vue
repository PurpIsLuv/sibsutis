<template>
    <section class="row">
        <ul class="navbar col-10 offset-1 d-flex justify-content-around">
            <li 
            v-for="(item,i) in navbarList" 
            :key="i" 
            @click="navClick(item)" 
            :class="navbarListWidth" 
            class="d-flex justify-content-center"
            > 
                {{item}}              
            </li>
        </ul>
    </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{ 
            navbarList: ['Задания','ЗУВ','Индикатор','Компетенция'],
        }
    },
    methods: {
        ...mapActions(['navbarlistActive']),
        navClick(navbarItem){
            this.navbarlistActive(navbarItem)
        }
    },
    computed: {
        navbarListWidth: function(){
            return `col-${12/this.navbarList.length}` 
        },
        navbarListActive: function(){
            return `background-color: rgba($color: #01448b, $alpha: 1.0);`
        }
    },
}
</script>

<style lang="scss">
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
</style>