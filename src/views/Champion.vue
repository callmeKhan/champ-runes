<template>
  <div class="container-fluid">
    <h1 class="text-center">{{$t('home.champions_statistics')}}</h1>
    <div class="row justify-content-center">
      <div class="col-1 sticky-list" style="left:0">
        <Recent/>
      </div>
      <div class="col-10">
        <Champions/>
      </div>
      <div class="col-1 sticky-list" style="right:0">
        <Hotpick/>
      </div>
    </div>
  </div>
</template>

<script>
import Champions from '@/components/champions.vue'
import Recent from '@/components/recent.vue'
import Hotpick from '@/components/hotpick.vue'

import dataChampions from "@/data/data-ver2.json";

export default ({
  components: {Champions,Recent,Hotpick},
})
</script>