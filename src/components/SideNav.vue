<template>
  <div class="w-64 bg-black h-full flex-none relative">
        <div @click="logged = !logged" class="p-6 cursor-pointer">
          <img src="../assets/spotifyLogo.png" class="h-10" style="filter: brightness(0) invert(1);" alt="spotify logo">
        </div>
        <div class="mx-2 mb-5">
          <button v-for="page in pages" :key="page" @click="setId = page.id" class="w-full hover:text-white text-sm font-semibold focus:outline-none border-none rounded px-3 py-2 flex items-center justify-start" :class="setId === page.id ? 'text-white' : 'text-gray-500'">
            <p>{{page.name}}</p>
          </button>
        </div>
        <div class="mx-2">
          <button class="flex text-sm font-semibold focus:outline-none px-3 py-2 text-gray-500 hover:text-white items-center justify-start">
            Criar playlist
          </button>
          <button @click="goToLiked()" class="flex text-sm font-semibold focus:outline-none px-3 py-2 text-gray-500 hover:text-white items-center justify-start">
            Músicas curtidas
          </button>
          <div class="h-px w-full bg-white my-3"></div>
        </div>
        <div class="mx-5">
          <div v-if="logged" class="w-full h-126 overflow-y-scroll ">
            <p v-for="playlist in info.items" :key="playlist.name" class="text-gray-500 cursor-pointer hover:text-white text-xs py-1">{{ playlist.name }}</p>
          </div>
          <button v-if="logged" class="relative bottom-0 mt-5 flex items-center justify-start text-gray-500 hover:text-white">
            <p class="text-sm font-semibold">Install App</p>
          </button>
          <button v-else class="absolute bottom-0 mt-5 mb-2 flex items-center justify-start text-gray-500 hover:text-white" >
            Cookies
          </button>
        </div>
        <div v-if="logged" class="absolute pt-4 bottom-0 mb-0">
          <img src="../assets/too-rare.jpg">
        </div>
      </div>
</template>

<script>
import axios from "axios"

export default {
  name: "SideNav",
  props: {
    test: String,
    logged: Boolean,
  },
  data() {
    return {
      pages: [
        {id: 'home', name: 'Home', icon: 'home'},
        {id: 'search', name: 'Search', icon: 'search'},
        {id: 'library', name: 'Your Library', icon: 'bar_chart'},
      ],
      setId: 'home',
      info: [],
    }
  },
  
  methods: {
    goToLiked(){
      this.$router.push("/liked")
    }
  },
  async created() {
    const token = "BQCVPTDCCY8fiNZd00PPZVAWgFvdh1mdEAhjMw2wLAzYj7POQ_aOYuaKoCYfGbipYbDYEErRJjIuh5bTxiAVotyJJYibO__gC0VaA1YDhQfrMcpuhcCT6VHWLW1iHNafxe3gGB_YKQ_AfwwwZpKd27ZzlCEF5QY5ht6564exkl5x_CS4gX9NCIulSxykgQ"
    try {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists', {
          params: { limit: 50, offset: 0},
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token, "Content-Type": "application/json",
          },
        })
      this.info = response.data
    } catch(e) {
      console.log(e)
    }
  },
}
</script>

<style>

</style>