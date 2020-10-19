<template>
  <div id="app">
    <Language/>
    <div id="nav">
      <!-- <router-link to="/">Statitics</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Language from '@/components/language'
import x from '@/data/z/mapData.js'
// import matchup from '@/data/z/matchup.js'
export default {
  components:{Language},
  mounted(){
    // console.log(x.mapKeyData());
  }
}
</script>

