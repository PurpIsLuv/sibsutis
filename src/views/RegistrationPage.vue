<template>
    <div class="reg">
        <form @submit.prevent="sendData">
            <input type="text" placeholder="Имя" v-model="name">
            <input type="text" placeholder="Фамилия" v-model="surname">
            <input type="text" placeholder="Отчество" v-model="patronymic">
            <input type="text" placeholder="Почта" v-model="email">
            

            <select name="" id="" v-model="type">
                <option value="Студент">Студент</option>
                <option value="Преподаватель">Преподаватель</option>
            </select>

            <section class="studentSection" v-if="isStudent">

                <input type="text" placeholder="Номер группы" v-model="номер_группы">

                <select name="" id="" v-model="код_направления">
                    <option :value="i" v-for="i in regData.код_направления" :key="i">
                        {{i}}
                    </option>
                </select>

                <select name="" id="" v-model="направление_подготовки">
                    <option :value="i" v-for="i in regData.направление_подготовки" :key="i">
                        {{i}}
                    </option>
                </select>

                <select name="" id="" v-model="профиль_подготовки">
                    <option :value="i" v-for="i in regData.профиль_подготовки" :key="i">
                        {{i}}
                    </option>
                </select>
            </section>


            <input type="text" placeholder="Пароль" v-model="password">
            <input type="submit" value="Зарегистрироваться">
        </form>

    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
    data(){
        return {
            name: '',
            surname : '',
            patronymic : '',
            email : '',
            type : '',
            "код_направления" : '',
            "направление_подготовки" : '',
            "профиль_подготовки" : '',
            password : '',
            "номер_группы" : '',
            regData: {},
        }
    },
    created(){
        this.getDBRegData()
    },
    methods: {
        ...mapGetters(['getRegData']),
        ...mapActions(['checkRegistration','getDBRegData']),
        sendData(){
            let fio = `${this.name} ${this.surname} ${this.patronymic}`
            this.checkRegistration({
                fio,
                email: this.email,
                type: this.type,
                "профиль_подготовки": this["профиль_подготовки"],
                password: this.password,
                "номер_группы": this["номер_группы"],
                "код_направления": this["код_направления"],
                "направление_подготовки": this["направление_подготовки"]
            })
        },
    },
    computed:{
        isStudent: function (){
            if (this.type == 'Студент'){
                this.regData = this.getRegData()
                return true
            }else{
                return false
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>