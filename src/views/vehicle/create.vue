<template>
  <div class="container mx-auto py-8">
    <div class="w-96 mx-auto bg-white rounded shadow">

      <div class="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">Agregar Vehiculo
      </div>

      <form name="student_application" id="student_application" action="#" @submit.prevent="create">
        <div class="py-4 px-8">
          <div class="grid grid-cols-1 mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2">Tipo:</label>
            <select v-model="tipo" class="border rounded w-full py-2 px-3 text-grey-darker">
              <option value="sedan">Sedan</option>
              <option value="motorbike">Motocicleta</option>
            </select>
            <p class="text-red-500" v-if="typeError !== ''">{{ typeError }}</p>
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2">Modelo:</label>
            <input v-model="modelo" class=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                   value="" placeholder="Ingrese el modelo del vehiculo" maxlength="100">
            <p class="text-red-500" v-if="modelError !== ''">{{ modelError }}</p>
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2">Potencia Motor (caballos de fuerza):</label>
            <input v-model="horsePower" class=" border rounded w-full py-2 px-3 text-grey-darker" type="number" min="0" max="1000"
                    value="" placeholder="Ingrese los caballos de fuerza">
            <p class="text-red-500" v-if="hpError !== ''">{{ hpError }}</p>
          </div>

          <div class="mb-4">
            <button
              class="mb-2 bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600 transition duration-200 each-in-out ">
              Guardar
            </button>
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "create",
  data() {
    return {
      'tipo': '',
      'modelo': '',
      'horsePower': '',
      'typeError': '',
      'modelError': '',
      'hpError': '',
    }
  },
  methods: {
    create() {
      if(!this.validate())
        return
      this.$api.post('/api/vehicles', {
        type: this.tipo,
        model: this.modelo,
        horse_power: this.horsePower,
      }).then(response => {
        if(response.data.success){
          router.push('/')
        }
        else {
          let errorsData = response.data.errors
          this.typeError = errorsData.type
          this.modelError = errorsData.model
          this.hpError = errorsData.horse_power
        }
      })
    },
    clearErrors(){
      this.typeError = ""
      this.modelError= ""
      this.hpError= ""
    },
    validate() {
      this.clearErrors()
      if(this.tipo === '' || this.modelo === '' || this.horsePower === '') {
        if (this.tipo === '') {
          this.typeError = 'Seleccione un tipo de vehiculo'
        }
        if (this.modelo === '') {
          this.modelError = 'Ingrese un modelo de vehiculo'
        }
        if (this.horsePower === '') {
          this.hpError = 'Ingrese los caballos de fuerza'
        }
        return false
      }
      return true
    },
  }
};
</script>
