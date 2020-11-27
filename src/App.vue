<template>
    <div id="app">
        <Language />
        <div id="nav">
            <div class="src">
              <samp><b><router-link to="/">Statitics</router-link></b></samp>
              <samp><b><router-link to="/path">Path note</router-link></b></samp>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import Language from "@/components/language";
import x from "@/data/z/mapData.js";
// import matchup from '@/data/z/matchup.js'
export default {
    components: { Language },
    mounted() {
        // console.log(x.mapKeyData());
    }
};
</script>
<style lang="scss" scoped>
#nav {
  .src {
    margin-left: 120px;
    @media only screen and (max-width: 420px) {
      margin-left: 50px;
    }
    @media only screen and (max-width: 328px) {
      margin-left: 35px;
    }
  }
}
a {
    &.router-link-exact-active {
        color: #42b983 !important;
    }
    text-decoration: none;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 0.2rem;
    color: #fff !important;
    background-color: #343a4078;
    border-color: #343a40;
    display: inline-block;
    font-weight: 400;
}
</style>

