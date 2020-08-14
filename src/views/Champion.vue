<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div id="recent-pick-div" class="col-1 sticky-list d-flex flex-column" style="left:0">
        <Recent/>
      </div>
      <div class="col-10">
        <Champions/>
      </div>
      <div id="most-pick-div" class="col-1 sticky-list d-flex flex-column" style="right:0">
        <Hotpick/>
      </div>
    </div>
  </div>
</template>

<script>
import Champions from '@/components/champions.vue'
import Recent from '@/components/recent.vue'
import Hotpick from '@/components/hotpick.vue'

export default ({
  components: {Champions,Recent,Hotpick},
})
</script>