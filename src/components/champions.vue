<template>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <samp><h1 class="text-center col my-0 main-title" style="font-weight: bolder;">{{$t('home.champions_statistics')}}</h1></samp>
        </div>
       <div class="row">
            <div class="col-12">
                <div class="py-1 pb-3 mt-n2">
                    <samp><b>{{$t('home.current_version')}}</b></samp>
                    <samp>
                        <a class="resetStorage" @click="clearHistory()">{{$t('home.clear_history')}}</a>
                    </samp>
                </div>
                <div class="input-group justify-content-center">
                    <div class="searchbar">
                        <input  v-model="searchName" type="input" class="search search_input" @keydown.esc="searchName = ''"  :placeholder='$t("home.search")' />
                        <b class="input-group-text btn clearable search_icon"  @click="searchName = ''">x</b>
                    </div>
                </div>
                <div class="d-flex my-3 row justify-content-center">
                    <div class="col col-md-6 col-sm-12">
                        <div class="row">
                            <template v-for="(role, index) in champRoles" >
                                <div class="col px-1 py-1" :key="index" >
                                    <samp @click="filterRole(role)" style="display:grid" :style='!championsRoleCount(role) ? "pointer-events: none" : ""'>
                                        <div :class="rolefilter === role ? 'role-active' : ''" class="role" :style='!championsRoleCount(role) ? "background-color: grey" : ""'>
                                            {{ $t('home.detail_champ.'+role) + '(' + championsRoleCount(role) + ')'}}
                                        </div>
                                    </samp>
                                </div>
                            </template>
                            
                        </div>
                    </div>
                </div>
                <div class="d-flex row justify-content-center main-content">
                    <div class="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-4 p-1"
                        v-for="(item, index) in championsData"
                        :key="index">
                        
                            <div class="champion" data-toggle="modal"
                            data-target="#champion-statitcs"
                            @click="setSelectedChamp(item)">
                            <i
                                class="img-champ list-champ"
                                :style="{'background-image': 'url('+require('@/assets/champion/'+item.key +'.webp')+')'}"
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
                <div class="cover" :style="selectedChamp.key ? {'background-image': 'url('+require('@/assets/cover/' + selectedChamp.key + '.webp' )+')'} : ''" ></div>
                <div class="modal-content" >
                    <div class="modal-body">
                        <div class="media d-flex flex-column">
                            <div class="justify-content-between d-flex w-100">
                                <label class="h3 text-center d-flex">
                                    <samp><b><i>{{selectedChamp.name}}</i></b></samp>
                                    <div class="d-flex">
                                        <template v-for="(item, index) in matchUp(selectedChamp.id)">
                                            <div class="px-2" :key="index">
                                                <i
                                                class="img-champ img-30 m-0"
                                                :style="{'background-image': 'url('+require('@/assets/champion/'+mapChamp(item.op_id) )+')'}"
                                                ></i>
                                            </div>
                                        </template>
                                    </div>
                                </label>
                                <button class="btn btn-danger align-self-baseline btn-sm" type="button" data-dismiss="modal"><samp>{{$t('detail.close')}}</samp></button>
                            </div>
                            <div class="nav nav-pills w-100">
                                <a @click="setRole(item.role)" class="w-100 col" v-for="(item, index) in selectedChamp.stats" :key="index" :href="'#tab'+item.id+index" data-toggle="tab" >
                                    <samp><b>{{$t(`home.detail_champ.${item.role}`)}}</b></samp>
                                </a>
                            </div>
                            <div class="tab-content clearfix w-100">
                                    <div class="tab-pane" :id="'tab'+item.id+index" v-for="(item, index) in selectedChamp.stats" 
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

                                    <div class="champ-hover media-body mw-100 w-100 text-left" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <label>
                                            <b>{{$t('detail.skill')}}</b>
                                        </label>
                                        <div class="ml-0 row mw-100 w-100">
                                            <div class="col d-flex">
                                                <skillOrder :skill="selectedChamp.skill" :skillOrder="item.skills"></skillOrder>
                                            </div>
                                        </div>
                                        <div class="ml-0 row mw-100 w-100">
                                            <div class="col  collapse" id="collapseExample">
                                                <skillChart class="w-100" :skills="item.skills"/>
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
                                                    <i :key="index" v-tooltip="keyItem[i]"
                                                        class="img-champ img-35 mr-3"
                                                        :style="{'background-image': 'url('+require('@/assets/items/'+i+'.webp' )+')'}"
                                                    ></i>
                                                </template>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="ml-0 row mw-100 mt-n4">
                                            <div class="col item-display">
                                                <template v-for="(i, index) in item.big_item_builds">
                                                    <i :key="index" v-tooltip="keyItem[i]"
                                                        class="img-champ img-35 mr-3"
                                                        :style="{'background-image': 'url('+require('@/assets/items/'+i+'.webp' )+')'}"
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
                                                <template v-for="(row, i) in getAllRune(item.runes[0])">
                                                    <div :key="i" class="row">
                                                        <div class="col p-0" v-for="(it, k) in row.runes" :key="k">
                                                            <i class="img-champ"  v-tooltip="{ content: it.name, classes: [chooseRune(it.id,item.runes[i+1])] }"
                                                                :class="[chooseRune(it.id,item.runes[i+1])]"
                                                                :style="{'background-image': 'url('+require('@/assets/rune/'+it.id+'.webp')+')'}"></i>
                                                        </div>
                                                    </div>
                                                </template>
                                            </div>
                                            <div style="border-left:1px solid grey; text-align: center !important" class="col">
                                                <template v-for="(row, i) in getAllRune(item.runes[5])">
                                                    <div :key="i" class="row" v-if="i>0">
                                                        <div class="col p-0" v-for="(it, k) in row.runes" :key="k">
                                                            <i class="img-champ" v-tooltip="{ content: it.name, classes: [chooseRuneSK(it.id, item.runes)] }"
                                                                :class="[chooseRuneSK(it.id, item.runes)]"
                                                                :style="{'background-image': 'url('+require('@/assets/rune/'+it.id+'.webp')+')'}"></i>
                                                        </div>
                                                    </div>
                                                </template>
                                            </div>
                                            <div style="border-left:1px solid grey; text-align: center !important" class="col">
                                                <template v-for="(rune, index) in sideKicks.rune">
                                                    <div class="row" :key="index">
                                                        <template v-for="(it, i) in rune.line">
                                                            <div :key="i" class="col p-0" v-tooltip="''">
                                                                <i  
                                                                    v-tooltip="{ content: sideKicksMap[it], classes: [chooseRune(it,item.rune_stat_shards[index])] }"
                                                                    :class="[chooseRune(it,item.rune_stat_shards[index])]"
                                                                    class="img-champ img-25"
                                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+it +'.webp')+')'}"
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
import skillChart from '@/components/skill-chart.vue'
import skillOrder from '@/components/skill-order.vue'
import matchUpRawData from '@/data/match-up.json'

import keyItem from '@/data/z/key-item.json'

export default ({
    components: {skillChart, skillOrder},
    data() {
        return {
            searchName: "",
            champions: [],
            runes: [],
            sideKicks: {},
            matchUpData: [],
            champRoles: ['TOP', 'MID', 'JUNGLE', 'ADC', 'SUPPORT'],
            sideKicksMap: {
                5001: 'Khả năng hồi máu',
                5002: 'Giáp',
                5003: 'Kháng phép',
                5005: 'Tốc độ tấn công',
                5007: 'Giảm thời gian hồi chiêu',
                5008: 'Sức mạnh thích ứng',
            },
            role: null,
            rolefilter: null,
            keyItem: {}
        };
    },
    mounted() {
        this.keyItem = keyItem
        this.champions = this.$store.getters.champions;
        this.sideKicks = this.$store.getters.sideKicks;
        this.runes = this.$store.getters.runes;
        $('#champion-statitcs').on('show.bs.modal', function (e) {
            $('.nav-pills > a:first-child').addClass('active')
            $('.tab-pane:first-child').addClass('active')
        })
        $('#champion-statitcs').on('hidden.bs.modal', function (e) {
            $('.nav-pills a').removeClass('active')
            $('.tab-pane').removeClass('active')
        })
        this.matchUpData = matchUpRawData
    },
    methods:{
        filterRole(role) {
            if (this.rolefilter === role) {
                this.rolefilter = null
            } else {
                this.rolefilter = role
            }
        },
        clearHistory() {
            this.$store.dispatch('resetHotPickFromStore')
        },
        matchUp(id){
            let result = []
            const rs = this.matchUpData.find(x => x.id === id)
            let arr = rs ? rs.match : []
            const allChamp = [...this.$store.getters.stats]
            arr.forEach(x => {
                let xx = allChamp.filter(y => y.id === x.op_id)
                let tmpRole = xx.map(x => {return x.role})
                if(tmpRole[0] === this.role)
                    result.push(x)
            });
            return result.filter(x => x.role === this.role).slice(0,3)
        },
        mapChamp(id){
            return this.$store.getters.champions.find(x => x.id === id).key + '.webp'
        },
        chooseRune(index, picked){
            return index != picked ? 'enabled-rune' : 'checked-rune'
        },
        chooseRuneSK(index, picked){
            return index != picked[6] && index != picked[7] ? 'enabled-rune' : 'checked-rune'
        },
        setSelectedChamp(item){
            this.$store.dispatch('selected', item)
            this.$store.dispatch('recent', item)
            this.role = this.$store.getters.selectedChamp.stats[0].role
        },
        getAllRune(item){
            let rs = this.runes.find(x => x.id == item)
            return item && rs ? rs.slots : []
        },
        setRole(role){
            this.role = role
        },
        championsRoleCount(role) {
            let tmp = role ? this.champions.filter(x => x.role.includes(role)) : this.champions
            return this.searchName == "" ? tmp.length : tmp
                .filter((x) =>x.name.toLowerCase().includes(this.searchName.toLowerCase())).length
        }
    },
    computed: {
        selectedChamp(){
            return this.$store.getters.selectedChamp
        },
        championsData() {
            let tmp = this.rolefilter ? this.champions.filter(x => x.role.includes(this.rolefilter)) : this.champions
            return this.searchName == "" ? tmp : tmp
                .filter((x) =>x.name.toLowerCase().includes(this.searchName.toLowerCase()));
        }
    },
});
</script>
<style scope lang="scss">
@import '@/style/champ.scss';
.main-title {
    font-size: 40px;
    @media only screen and (max-width: 380px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 380px) {
        font-size: 20px;
    }
}
div.nav.nav-pills{
    a{
        width: 100%;
        transition: 0.7s;
        color: black;
        text-decoration: none;
        margin: 0.3rem;
        border-radius: 0.5rem;
        background-color: #818181b4;
        &.active{
            background-color: #9ddbd6;
        }
        &:hover{
            text-decoration: none !important;
            background-color: #9ddbd6;
        }
    }
} 
.cover {
    margin: 1px;
    position: absolute;
    top: 0;
    width: 99.5%;
    height: 99.5%;
    z-index: 1;
    background-position: center;
    background-size: cover;
}
.modal-content{
    z-index: 2;
    background-color: #ffffffb0;
}
.main-content{
    scroll-behavior: smooth;
    max-height: 60vh;
    @media only screen and (max-width: 420px) {
        max-height: 50vh;
    }
    @media only screen and (max-width: 502px) {
        max-height: 55vh;
    }
    @media only screen and (max-width: 320px) {
        max-height: 38vh;
    }
    overflow: scroll;
}
.champ-hover{
    transition: 0.5s;
    border-radius: 0.5rem;
    padding-bottom: 0.3rem;
    &:hover{
        background: #9ddbd65b;
        cursor: pointer;
    }
}
.img-30 {
    height: 25px !important;
    width: 25px !important;
}
.resetStorage {
    margin-left: .5rem;
    padding: 0 .3rem;
    cursor: pointer !important;
    text-decoration: none !important;
    font-size: small !important;
    background-color: black !important;
    border-radius: 5px !important;
    color: #42b983 !important;
    font-weight: bold;
}
.role-active {
    background-color: black !important;
    border-radius: 5px !important;
    color: #42b983 !important;
}
.role {
    padding: 0.3rem .3rem;
    cursor: pointer;
    text-decoration: none;
    font-size: small;
    background-color: rgb(175, 166, 166);
    border-radius: 5px;
    color: #000000;
    font-weight: bold;
    transition: .5s;
}
</style>
