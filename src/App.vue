<template>
  <div id="app">
    <nav id="nav" v-if="this.$store.getters.usuario !== null" class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0">
        <router-link to="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</router-link>
      </div>
      <div>
        <span class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">{{this.$store.getters.usuario.email}}</span>
        <button @click="logout" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Salir</button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  props: {
    source: String,
  },
  data: () => ({

  }),
  // computed: {
    // menu: {
    //   get() {
    //     return this.$store.getters.usuario.menu;
    //   },
    // },
  // },
  beforeCreate() {
    // console.log(this.$store.getters.usuario)
    // if(this.$route.name !== 'login') {
    //   this.$store.dispatch("fetchUsuario").finally(()=>console.log(this.$store.getters.usuario.email));
    // }
  },
  mounted() {
    console.log(this.$store.getters.usuario)
    if(this.$route.name !== 'login' && this.$store.getters.usuario === null) {
      this.$store.dispatch("fetchUsuario");
    }
  },
  methods: {
    logout() {
      this.$api.post("/api/logout").then(() => {
        // this.$router.push({ name: 'login'})
        // window.location =
        //   "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" +
        //   process.env.VUE_APP_API_URL +
        //   "/redirect";
        this.$store.dispatch("fetchUsuario");
      });
    },
  },
};
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav {-->
<!--  padding: 30px;-->
<!--}-->

<!--#nav a {-->
<!--  font-weight: bold;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav a.router-link-exact-active {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
