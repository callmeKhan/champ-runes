<template>
    <div class="d-flex row justify-content-center content">
        <div
            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-1"
            v-for="(item, index) in championsData"
            :key="index"
        >
            <div
                data-toggle="modal"
                data-target="#champion-statitcs"
                class="most-picked"
                @click="setSelectedChamp(item)"
            >
                <i
                    class="img-champ"
                    :style="{'background-image': 'url('+require('@/assets/champion/'+ item.key +'.webp')+')'}"
                >
                    <label>{{item.count}}</label>
                </i>
            </div>
        </div>
        <br />
    </div>
</template>


<script>
export default {
    data() {
        return {};
    },
    methods: {
        setSelectedChamp(item) {
            this.$store.dispatch("selected", item);
        },
    },
    computed: {
        championsData() {
            return this.$store.getters.hotPick;
        },
    },
};
</script>
<style scope lang="scss">
</style>
