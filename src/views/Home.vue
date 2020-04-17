<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row logo justify-content-center">
        <img src="../assets/img/sibsutis_logo.jpg" alt="">
      </div>
      <div class="row justify-content-center">
        <div class="form">
          <form @submit.prevent="sendData" class="d-flex flex-column align-items-center">

            <div class="form__item col-8">
              <input type="text" placeholder="Почта" v-model="email" class="form-control">
            </div>

            <div class="form__item col-8">
              <input type="text" placeholder="Пароль" v-model="password" class="form-control">
            </div>

            <div class="form__item">
              <button type="submit" class="btn btn-primary">Войти</button>
            </div>

            <router-link to="/registration" class="form__item">
              <button class="btn btn-success">Зарегистрироваться</button>
            </router-link>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      password: new String(),
      email: new String()
    }
  },
  created(){
    this.password = ''
    this.email = ''
  },
  methods:{
    ...mapActions(['checkLogin']),
    sendData(){
      this.checkLogin({
        email:this.email,
        password: this.password
      })
    },
  },
}
</script>

<style lang="scss">
.home{
  padding-top: 10vh;
}
  .logo{
    img{
      width: 80px;
      border-radius: 4px;
      position: absolute;
      margin-left: -100px;
      margin-top: -10px;
      box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.7);
    }
  }
  .form{
    background-color: #01448b;
    border-radius: 10px;
    margin-top: 40px;
    width: 350px;
    padding-top: 40px;
    padding-bottom: 20px;
    .form__item{
      margin-top: 10px;
      button{
        width: 200px;
      }
    }
  }  
</style>