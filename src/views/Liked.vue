<template>
  <div class="bg-black h-screen m-0">
    <div class="flex" style="height: 88vh;">
      <!-- side nav -->
      <SideNav :info="info" />
      <!-- main content -->
      <div class="w-full p-0 bg-gradient-to-b from-gray-900 to-dark h-full relative">
        <!-- Header -->
        <Header :logged="logged" />
        <!-- Main -->
        <div v-if="logged" class=" text-white">
          <div class="flex bg-liked-color p-10">
            <img class="w-56 mr-5 shadow-2xl" src="../assets/liked-main.jpg">
            <div class="pt-20 bottom-0">
              <div class="text-sm font-semibold">
                LISTA DE REPRODUÇÃO
              </div>
              <div class="font-bold text-6xl">
                Músicas de que gostaste
              </div>
              <div>
                User info
              </div>
            </div>
          </div>
          <div class="p-8">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 bg-green rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              
              <table class=" mt-5 table-auto">
                <tr class="ml-0 p-10 text-left">
                  <th class="w-10 font-normal">#</th>
                  <th class="w-128 font-normal">TÍTULO</th>
                  <th class="w-64 font-normal">ÁLBUM</th>
                  <th class="w-64 font-normal">DATA ADICIONADA</th>
                </tr>
                <tr>
                  <td>0</td>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
              </table>
            </div>
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
  
  components: {
    Header,
    SideNav,
    PlayBar,
  },
  data() {
    return {
      logged: true,
      info: [],
    }
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
        '	https://api.spotify.com/v1/me/tracks', {
          params: { market: "ES", limit: 50, offset: 0},
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