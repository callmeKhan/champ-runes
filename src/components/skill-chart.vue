<template>
<div>
    <div v-if="skills">
        <div :class="'r-'+i" class="r" v-for="(x,i) in 5" :key="i">
            <div v-for="(y,n) in 19" :key="n" class="c d-flex justify-content-center" :class="i == skills[n-1] ? 'active':''">
                <b>
                {{i == skills[n-1] ? '◼': (x > 1 ? (n==0 ? skillKey[i]: ''): (n > 0 ? n : '+'))}}
                </b>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'skillChart',
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
<style lang="scss" scoped>
.r {
  display: flex !important;
  .c:first-child{
      background-color:rgb(157, 219, 214);
  }
  &:first-child {
    .c{
        background-color:  rgb(157, 219, 214);
        &:first-child{
            border-radius: 0.5rem 0 0 0 
        }
        &:last-child{
            border-radius: 0 0.5rem 0 0 
        }
    }
  }
  &:last-child {
      .c{
        &:first-child{
            border-radius: 0 0 0 0.5rem
        }
        &:last-child{
            border-radius: 0 0 0.5rem 0 
        }
    }
  }
}

// .r-1{
//     color:rgb(214, 85, 85);
//     div.active{
//         border-radius: 0.2rem ;
//         background-color: rgba(34, 72, 88, 0.486);
//     }
// }

.c {
  font-size: 0.7rem;
  flex-basis: 2rem !important;
  box-sizing: border-box !important;
  background-color: #3a2f2f3f;
  margin: 1px;
  display: flex;
  justify-content: center!important;
  height: 1rem;
}
</style>