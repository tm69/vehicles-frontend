<template>
  <div class="home container mx-auto p-6 font-mono">
    <div v-if="this.$store.getters.usuario !== null">
      <section >
        <div class="flex justify-center items-end py-2">
          <div class="flex">
            <button @click="agregar" type="button" class="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out">Agregar</button>
          </div>
        </div>
        <Tabla />
      </section>
    </div>
    <div v-else class="flex items-center justify-center w-full h-full">
      <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
          <path clip-rule='evenodd'
                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                fill='currentColor' fill-rule='evenodd' />
        </svg>
        <div>Loading ...</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabla from "@/components/Tabla";

export default {
  name: "Home",
  components: {
    Tabla,
  },
  methods:{
    agregar() {
      this.$router.push({ name: 'agregar-vehiculo'})
    },
  }
};
</script>
