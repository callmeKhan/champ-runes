<template>
<div>
    <div v-if="skills">
        <div class="r" v-for="(x,i) in 5" :key="i">
            <div v-for="(y,n) in 19" :key="n" class="c d-flex justify-content-center">
                <b>
                {{i == skills[n-1] ? '•': (x > 1 ? (n==0 ? skillKey[i]: ''): (n > 0 ? n : '+'))}}
                </b>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    nam: 'skillChart',
    props: [
        'skills'
    ],
    data(){
        return {
            skillKey: {1: 'Q', 2: 'W', 3: 'E', 4: 'R'}
        }
    }
}
</script>
<style scoped>
.r {
  display: flex !important;
}

.c {
  font-size: 0.9rem;
  flex-basis: 2rem !important;
  box-sizing: border-box !important;
  background-color: #bdbdbd33;
  margin: 1px;
  display: flex;
  justify-content: center!important;
  height: 1rem;
}
</style>