<template>
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">Vehiculo</th>
            <th class="px-4 py-3"># llantas</th>
            <th class="px-4 py-3">Potencia Motor</th>
            <th class="px-4 py-3">Creado el</th>
          </tr>
          </thead>
          <tbody class="bg-white">
          <tr class="text-gray-700" v-for="vehicle in vehicles" :key="vehicle.id">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">{{ vehicle.model }}</p>
                  <p class="text-xs text-gray-600">{{ vehicle.type }}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{{ vehicle.tires }}</td>
            <td class="px-4 py-3 text-ms font-semibold border">{{ vehicle.horse_power }}</td>
            <td class="px-4 py-3 text-sm border">{{ vehicle.created_at }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: "Tabla",
  data(){
    return {
      vehicles:[],
    }
  },
  mounted() {
    this.$api.get('/api/vehicles').then(response => {
      console.log(response)
      this.vehicles = response.data
    })
  }
};
</script>

<style scoped>

</style>