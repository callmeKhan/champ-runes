<template>
    <div>
        <b class="skill" v-for="(x, i) in calOrder" :key="i">
            <i 
            class="img-champ img-35"
            :style="{'background-image': 'url('+require('@/assets/skills/'+nameSkill(x) )+')'}" >
            </i>
            <label>{{x}}</label>
        </b>
    </div>
</template>
<script>
export default {
    nam: 'skillOrder',
    props: [
        'skill',
        'skillOrder'
    ],
    computed: {
        calOrder(){
            let Q=0,W=0,E=0
            this.skillOrder.forEach((x,i) => {
                if(x == 1) Q += i
                if(x == 2) W += i
                if(x == 3) E += i
            });
            let mapKey = {Q:Q,W:W,E:E}
            let temp = [Q,W,E].sort()
            let rs = []
            Object.keys(mapKey).find(key => mapKey[key] === temp[0])
            rs.push(Object.keys(mapKey).find(key => mapKey[key] === temp[0]))
            rs.push(Object.keys(mapKey).find(key => mapKey[key] === temp[1]))
            rs.push(Object.keys(mapKey).find(key => mapKey[key] === temp[2]))
            return rs
        }
    },
    methods:{
        nameSkill(key){
            return (this.skill.find(x => Object.keys(x) == key)[key]).replace('.png', '.webp')
        }
    }

}
</script>
