<template>
    <div class="reg">
        <form @submit.prevent="sendData">
            <input type="text" placeholder="Имя" v-model="name">
            <input type="text" placeholder="Фамилия" v-model="surname">
            <input type="text" placeholder="Отчество" v-model="patronymic">
            <input type="text" placeholder="Почта" v-model="email">
            <input type="text" placeholder="Номер группы" v-model="номер_группы">
            <select name="" id="" v-model="type">
                <option value="Студент">Студент</option>
                <option value="Преподаватель">Преподаватель</option>
            </select>
            <select name="" id="" v-model="код_направления">
                <option value="код_направления">код_направления</option>
            </select>
            <input type="text" placeholder="Пароль" v-model="password">
            <input type="submit" value="Зарегистрироваться">
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data(){
        return {
            name: new String(),
            surname: new String(),
            patronymic: new String(),
            email: new String(),
            type: new String(),
            "код_направления": new String(),
            "направление_подготовки": new String(),
            "профиль_подготовки": new String(),
            password: new String(),
            "номер_группы": new String()
        }
    },
    created(){
        this.name = ''
        this.surname = ''
        this.patronymic = ''
        this.email = ''
        this.type = ''
        this["код_направления"] = ''
        this["направление_подготовки"] = ''
        this["профиль_подготовки"] = ''
        this.password = ''
        this["номер_группы"] = ''
    },
    methods: {
        ...mapActions(['checkRegistration']),
        sendData(){
            let fio = `${this.name} ${this.surname} ${this.patronymic}`
            this.checkRegistration({
                fio,
                email: this.email,
                type: this.type,
                "код_направления": this["код_направления"],
                password: this.password,
                "номер_группы": this["номер_группы"]
            })
        }
    },
}
</script>

<style lang="scss">
    
</style>