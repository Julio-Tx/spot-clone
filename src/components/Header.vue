<template>
  <div class="w-full bg-blackin sticky top-0 p-4 flex items-center justify-between ">
          <div class="flex items-center ">
            <button class="rounded-full mr-3 bg-black text-white w-8 h-8">
              <font-awesome-icon icon="fa-solid fa-chevron-left fa-2x" />
            </button>
            <button class="rounded-full bg-black text-white w-8 h-8">
              <font-awesome-icon icon="fa-solid fa-chevron-right fa-2x" />
            </button>
          </div>
          <div v-if="!logged" class="absolute right-0">
            <button class="text-gray-500 mr-5 text-lg hover:text-white font-semibold">Registra-te</button>
            <button class="transform rounded-3xl text-lg hover:scale-105 font-semibold bg-white mr-5 h-10 w-40">Iniciar sessão</button>
          </div>
        </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    logged: Boolean,
  }

}
</script>

<style>

</style>