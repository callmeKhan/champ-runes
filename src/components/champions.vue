<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <h1 class="text-center col">{{$t('home.champions_statistics')}}</h1>
        </div>
       <div class="row">
            <div class="col-12">
                <div class="input-group justify-content-center">
                    <div class="searchbar">
                        <input  v-model="searchName" type="input" class="search search_input" @keydown.esc="searchName = ''"  :placeholder='$t("home.search")' />
                        <b class="input-group-text btn clearable search_icon"  @click="searchName = ''">x</b>
                    </div>
                </div>
                    <div class="d-flex row pt-5 justify-content-center">
                        <div class="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-4 p-1"
                            v-for="(item, index) in championsData"
                            :key="index">
                            
                                <div class="champion" data-toggle="modal"
                                data-target="#champion-statitcs"
                                @click="setSelectedChamp(item)">
                                <i
                                    class="img-champ"
                                    :style="{'background-image': 'url('+require('@/assets/'+item.name +'_OriginalSquare.png')+')'}"
                                ></i>
                                <label class="d-block dot-name">
                                    <b>{{item.name}}</b>
                                </label>
                            </div>
                        </div>
                    </div>
            </div>
       </div>

        <!-- Modal -->
        <div
            class="modal fade"
            id="champion-statitcs"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="media d-flex flex-column">
                            <div class="justify-content-between d-flex w-100">
                                <label class="h3 text-center">
                                    <b>{{selectedChamp.name}}</b>
                                </label>
                                <button class="btn btn-danger align-self-end" type="button" data-dismiss="modal">{{$t('detail.close')}}</button>
                            </div>
                            <ul class="nav nav-pills">
                                <li class="p-1" v-for="(item, index) in selectedChamp.stats" :key="index" >
                                    <a  :href="'#tab'+item.id+index" data-toggle="tab" :class="[index == 0 || selectedChamp.stats.length == 0 ? 'active':'']">{{item.role}}</a>
                                </li>
                            </ul>
                            <div class="tab-content clearfix w-100">
                                <div class="tab-pane" :id="'tab'+item.id+index" v-for="(item, index) in selectedChamp.stats" 
                                :class="[index == 0 || selectedChamp.stats.length == 0 ? 'active':'']"
                                :key="index">
                                    <div class="media-body mw-100 w-100 text-left">
                                        <label>
                                            <b>{{$t('detail.spell')}}</b>
                                        </label>
                                        <div class="ml-0 row w-100">
                                            <div class="col d-flex justify-content-start spell-display">
                                                <template v-for="(item, index) in item.spells">
                                                    <div class="pr-3" :key="index">
                                                        <i 
                                                        :class="[index == 2 ? 'ml-3' : '']"
                                                        class="img-champ img-35"
                                                        :style="{'background-image': 'url('+require('@/assets/spells/'+item )+')'}"
                                                    ></i>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="media-body mw-100 w-100 text-left">
                                        <label>
                                            <b>{{$t('detail.skill')}}</b>
                                        </label>
                                        <div class="ml-0 row mw-100 w-100">
                                            <div class="col d-flex">
                                                <template v-for="(item, index) in selectedChamp.skill">
                                                    <div :key="index" class="pr-3">
                                                        <template v-for="(it,ind) in item" >
                                                            <b class="skill" :key="ind">
                                                                <i 
                                                                class="img-champ img-35"
                                                                :style="{'background-image': 'url('+require('@/assets/skills/'+it )+')'}" >
                                                                </i>
                                                                <label>{{ind}}</label>
                                                            </b>
                                                        </template>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="media-body mw-100 w-100 text-left">
                                        <label>
                                            <b>{{$t('detail.items')}}</b>
                                        </label>

                                        <div class="ml-0 row mw-100">
                                            <div class="col">
                                                <template v-for="(i, index) in item.starting_items">
                                                    <i :key="index"
                                                        class="img-champ img-35 mr-3"
                                                        :style="{'background-image': 'url('+require('@/assets/tmp/'+i+'.png' )+')'}"
                                                    ></i>
                                                </template>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="ml-0 row mw-100 mt-n4">
                                            <div class="col item-display">
                                                <template v-for="(i, index) in item.big_item_builds">
                                                    <i :key="index"
                                                        class="img-champ img-35 mr-3"
                                                        :style="{'background-image': 'url('+require('@/assets/tmp/'+i+'.png' )+')'}"
                                                    ></i>
                                                </template>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="media-body mw-100 w-100 text-left">
                                        <label>
                                            <b>{{$t('detail.runes')}}</b>
                                        </label>
                                        <div class="ml-0 row mw-100 w-100" >
                                            <div style="text-align: center !important" class="col">
                                                <template v-for="(row, i) in arrImgInLineMain">
                                                    <div class="row" :key="i">
                                                        <template v-for="(item, index) in row.line">
                                                            <div
                                                                class="col p-0"
                                                                :key="index">
                                                                <i class="img-champ"
                                                                :class="[chooseRune(index,checkedRune0[i+1])]"
                                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+item)+')'}"></i>
                                                            </div>
                                                        </template>
                                                    </div>
                                                </template>
                                            </div>
                                            <div style="border-left:1px solid grey; text-align: center !important" class="col">
                                                <template v-for="(row, i) in arrImgInLineSk1">
                                                    <div class="row" :key="i">
                                                        <template v-for="(item, index) in row.line" >
                                                            <div class="col p-0"
                                                                :key="index">
                                                                <i class="img-champ"
                                                                :class="[chooseRune(index,checkedRune1[i+1])]"
                                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+item)+')'}"
                                                                ></i>
                                                            </div>
                                                        </template>
                                                    </div>
                                                </template>
                                            </div>
                                            <div style="border-left:1px solid grey; text-align: center !important" class="col">
                                                <template v-for="(item, index) in sideKicks.rune">
                                                    <div class="row" :key="index">
                                                        <template v-for="(item1, index1) in item.line">
                                                            <div :key="index1" class="col p-0">
                                                                <i
                                                                    :class="[chooseRune(index1,checkedRune2[index])]"
                                                                    class="img-champ img-25"
                                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+item1 +'.png')+')'}"
                                                                ></i>
                                                            </div>
                                                        </template>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default ({
    data() {
        return {
            searchName: "",
            champions: [],
            runes: [],
            sideKicks: {},
        };
    },
    mounted() {
        this.champions = this.$store.getters.champions;
        this.sideKicks = this.$store.getters.sideKicks;
        this.runes = this.$store.getters.runes;
    },
    methods:{
        chooseRune(index, picked){
            return index != picked ? 'enabled-rune' : 'checked-rune'
        },
        setSelectedChamp(item){
            this.$store.dispatch('selected', item)
            this.$store.dispatch('recent', item)
        }
    },
    computed: {
        selectedChamp(){
            return this.$store.getters.selectedChamp
        },
        championsData() {
            return this.searchName == ""
                ? this.champions
                : this.champions.filter((x) =>
                      x.name.toLowerCase().includes(this.searchName.toLowerCase())
                  );
        },
        sideKick1() {
            return this.selectedChamp
                ? this.selectedChamp.runes
                    ? this.selectedChamp.runes.indexSide1[0]
                    : "Domination"
                : "Domination";
        },
        checkedRune2() {
            return this.selectedChamp
                ? this.selectedChamp.runes
                    ? this.selectedChamp.runes.indexSide2
                    : 0
                : 0;
        },
        checkedRune1() {
            return this.selectedChamp
                ? this.selectedChamp.runes
                    ? this.selectedChamp.runes.indexSide1
                    : 0
                : 0;
        },
        checkedRune0() {
            return this.selectedChamp
                ? this.selectedChamp.runes
                    ? this.selectedChamp.runes.indexMain
                    : 0
                : 0;
        },
        mapSideKick1() {
            return this.sideKick1
                ? this.runes.find((x) => x.key == this.sideKick1)
                : [];
        },
        arrImgInLineSk1(){
            let rs = this.mapSideKick1 ? this.mapSideKick1.arrImgInLine : []
            let tmp = [...rs]
            tmp.shift() 
            return tmp
        },
        indexMain() {
            return this.selectedChamp
                ? this.selectedChamp.runes
                    ? this.selectedChamp.runes.indexMain[0]
                    : "Domination"
                : "Domination";
        },
        mapIndexMain() {
            return this.indexMain
                ? this.runes.find((x) => x.key == this.indexMain)
                : [];
        },
        arrImgInLineMain(){
            return this.mapIndexMain ? this.mapIndexMain.arrImgInLine : []
        }
    },
});
</script>
<style scope lang="scss">
@import '@/style/champ.scss';
ul.nav.nav-pills{
    li{
        a{
            color: black;
            text-decoration: none;
            padding: 0.3rem;
            &.active{
                background-color: #aea1a18a;
                border-radius: 0.5rem;
            }
        }
    }
} 
</style>
