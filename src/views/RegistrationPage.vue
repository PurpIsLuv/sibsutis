<template>
    <div class="reg">
        <div class="container-fluid field">
            <div class="row logo justify-content-center">
                <img src="../assets/img/sibsutis_logo.jpg" alt="">
            </div>
            <div class="row justify-content-center">
                <div class="form reg-form">
                    <form @submit.prevent="sendData" class="d-flex flex-column align-items-center">
            
                        <div class="form__item col-8">
                            <input type="text" placeholder="Имя" v-model="name" class="form-control">
                        </div>

                        <div class="form__item col-8">
                            <input type="text" placeholder="Фамилия" v-model="surname" class="form-control">
                        </div>

                        <div class="form__item col-8">
                            <input type="text" placeholder="Отчество" v-model="patronymic" class="form-control">
                        </div>

                        <div class="form__item col-8">
                            <input type="text" placeholder="Почта" v-model="email" class="form-control">
                        </div>

                        <div class="form__item col-8">
                            <select name="" id="" v-model="type" class="form-control">
                                <option value="Студент">Студент</option>
                                <option value="Преподаватель">Преподаватель</option>
                            </select>
                        </div>  

                        <section class="studentSection col-8" v-if="isStudent">

                            <div class="form__item">
                                <input type="text" placeholder="Номер группы" v-model="номер_группы" class="form-control">
                            </div>
                            
                            <div class="form__item">
                                <select name="" id="" v-model="код_направления" class="form-control">
                                    <option :value="i" v-for="i in regData.код_направления" :key="i">
                                        {{i}}
                                    </option>
                                </select>
                            </div> 

                            <div class="form__item">
                                <select name="" id="" v-model="направление_подготовки" class="form-control">
                                    <option :value="i" v-for="i in regData.направление_подготовки" :key="i">
                                        {{i}}
                                    </option>
                                </select>
                            </div> 

                            <div class="form__item">
                                <select name="" id="" v-model="профиль_подготовки" class="form-control">
                                    <option :value="i" v-for="i in regData.профиль_подготовки" :key="i">
                                        {{i}}
                                    </option>
                                </select>
                            </div> 

                        </section>

                        <div class="form__item col-8">
                            <input type="text" placeholder="Пароль" v-model="password" class="form-control">
                        </div> 

                        <div class="form__item">
                            <button type="submit" class="btn btn-success">Зарегистрироваться</button>
                        </div>  

                        <router-link to="/" class="form__item">
                            <button class="btn btn-primary">Войти</button>
                        </router-link>

                    </form>
                </div>
            </div>
        </div>
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