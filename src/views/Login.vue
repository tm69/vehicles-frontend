<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
    <form class="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md" action="#" @submit.prevent="login" >
      <p class="mb-5 text-3xl uppercase text-gray-600">Login</p>
      <input v-model="email" :disabled="loading" type="email" name="email" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Email" required>
      <input v-model="password" type="password" name="password" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Password" required>
      <p class="mb-5 text-sm uppercase text-red-500"  v-if="errors.email">{{ errors.email[0] }}</p>
      <button @click="login" :disabled="loading" class="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>Login</span></button>
    </form>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Login",
  data(){
    return{
      loading:false,
      email:'',
      password:'',
      errors:{},
    }
  },
  beforeCreate() {
    if(this.$store.getters.usuario !== null){
      router.push('/')
    }
  },
  methods:{
    login(){
      if(this.email === '' || this.password === '' ){
        return;
      }
      this.errors = {}
      this.loading = true
      this.$api.post('/api/login', {
        email: this.email,
        password: this.password,
      }).then(response => {
        console.log(response);
        if(response.data.errors){
          this.errors = response.data.errors
          this.email = ''
          this.password = ''
        }
        else{
          this.$store.dispatch("fetchUsuario").then(()=> router.push('/'));
        }
      })
      .catch(response => {
        this.errors = response.data.errors
      }).finally(()=> this.loading = false)
    },
  }
};
</script>

<style scoped>

</style>