<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div id="recent-pick-div" class="col-1 sticky-list" style="left:0">
        <label class="bg-warning p-1"><b>{{$t('home.recent_picked')}}</b></label>
        <Recent/>
      </div>
      <div class="col-10">
        <Champions/>
      </div>
      <div id="most-pick-div" class="col-1 sticky-list" style="right:0">
        <label class="bg-info p-1"><b>{{$t('home.most_picked')}}</b></label>
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