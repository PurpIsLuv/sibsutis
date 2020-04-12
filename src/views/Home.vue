<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="sendData">
      <input type="text" placeholder="Почта" v-model="email">
      <input type="text" placeholder="Пароль" v-model="password">
      <input type="submit" value="Войти">
    </form>
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
