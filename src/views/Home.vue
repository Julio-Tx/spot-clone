<template>
  <div class="bg-black h-screen">
    <div class="flex" style="height: 88vh;">
      <!-- side nav -->
      <SideNav :logged="logged" />
      <!-- main content -->
      <div class="w-full bg-gradient-to-b from-gray-900 to-dark h-full relative">
        <!-- Header -->
        <Header :logged="logged" />
        <!-- Main -->
        <div v-if="logged" class="ml-3 text-white">
          <div class="text-white text-3xl font-bold p-4">Boa tarde</div>
          <div class="flex">
            <div v-for="playlist in last3Playlists" :key="playlist.name"  class="m-5 w-128 h-127 rounded bg-blackin"> {{ playlist.name }}</div>
          </div>
          <div class="flex">
            <div v-for="playlist in lastPlaylists" :key="playlist.name" class="m-5 mt-0 w-128 h-127 rounded bg-blackin"> {{ playlist.name }}</div>
          </div>
        </div>
        <div v-else>
          <div class="text-white">Please log in</div>
        </div>
      </div>
    </div>
    <!-- play bar -->
    <PlayBar />
  </div>
</template>

<script>
import axios from "axios"
import SideNav from "../components/SideNav.vue"
import Header from "../components/Header.vue"
import PlayBar from "../components/PlayBar.vue"

export default {
  name: 'App',
  data() {
    return {
      playlists: [],
      logged: false,
      info: [],
      items: [],
      last3Playlists: [
        {name: "A7X"},
        {name: "panico no disco"},
        {name: "Sergio Tankian"},
      ],
      lastPlaylists: [
        {name: "A7X"},
        {name: "panico no disco2"},
        {name: "Sergio Tankian"},
      ],
    }
  },
  components: {
    Header,
    SideNav,
    PlayBar,
  },
  methods: {
    goToLiked(){
      this.$router.push("/liked")
    }
  },
  async created() {
    const token = "BQCqPKS3UqPc7vvFF6CRUzGcmirqKYLSs5HE4bTE4gnfvmtlZ0PA_5vZS6E2WK7XPValXS9ZySRO6BjjHF70iS8tQAOOpENmMBcpY8yuN-_-wNP4Efqzbnq2gOE-kQGlzkab-Zl3MjZKGuKOGXykOhi4Yx6xt15bp3wiqT2sar20VaHBCwnl5Dz80JvPSw"
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
