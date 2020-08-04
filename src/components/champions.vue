<template>
    <div class="container">
        <div>
            <input v-model="searchName" type="input" class="search" />
            <label class="btn clearable" @click="searchName = ''">Clear</label>
            <div class="d-flex row pt-5 justify-content-center">
                <div
                    class="col-1 p-1"
                    v-for="(item, index) in championsData"
                    :key="index"
                    
                >
                    <div class="champion" data-toggle="modal"
                    data-target="#champion-statitcs"
                    @click="selectedChamp = item;count = 0;line =2;countSK1 = 0; lineSK1 = 1;countSK2 = 0; lineSK2 = 0">
                        <i
                            class="img-champ"
                            :style="{'background-image': 'url('+require('@/assets/'+item.name +'_OriginalSquare.png')+')'}"
                        ></i>
                        <label class="d-block dot-name">
                            <b>{{item.name}}</b>
                        </label>
                    </div>
                </div>
                <br />
            </div>
        </div>

        <!-- Modal -->
        <div
            class="modal fade"
            id="champion-statitcs"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="media d-flex flex-column">
                            <label class="h3 text-center">
                                <b>{{selectedChamp.name}}</b>
                            </label>
                            <div class="media-body">
                                <label>
                                    <b>Spell</b>
                                </label>
                            </div>
                            <div class="ml-0 row w-25">
                                <template v-for="(item, index) in selectedChamp.spell">
                                    <div :key="index" class="col-6">
                                        <i
                                            class="img-champ"
                                            :style="{'background-image': 'url('+item+')'}"
                                        ></i>
                                    </div>
                                </template>
                            </div>

                            <div class="media-body">
                                <label>
                                    <b>Skill</b>
                                </label>
                            </div>
                            <div class="ml-0 row mw-100">
                                <template v-for="(item, index) in selectedChamp.skill">
                                    <div v-if="index < 3" :key="index" class="col">
                                        <i
                                            class="img-champ"
                                            :style="{'background-image': 'url('+item+')'}"
                                        ></i>
                                    </div>
                                </template>
                            </div>

                            <div class="media-body">
                                <label>
                                    <b>Items</b>
                                </label>
                            </div>
                            <div class="ml-0 row mw-100">
                                <template v-for="(item, index) in selectedChamp.build">
                                    <div :key="index" class="col">
                                        <i
                                            class="img-champ"
                                            :style="{'background-image': 'url('+item+')'}"
                                        ></i>
                                    </div>
                                </template>
                            </div>

                            <div class="media-body">
                                <label>
                                    <b>Runes</b>
                                </label>
                            </div>
                            <div class="ml-0 row mw-100 w-100">
                                 <div class="col">
                                    <template v-for="(row, i) in arrImgInLineMain">
                                        <div class="row" :key="i">
                                            <template v-for="(item, index) in row.line">
                                                <div
                                                    class="col"
                                                    :key="index">
                                                    <i class="img-champ"
                                                    :class="[chooseRune(index,checkedRune0[i+1])]"
                                                        :style="{'background-image': 'url('+require('@/assets/rune/'+item)+')'}"></i>
                                                </div>
                                            </template>
                                        </div>
                                    </template>
                                </div>
                                <div style="border-left:1px solid grey" class="col ml-2 mr-3">
                                    <template v-for="(row, i) in arrImgInLineSk1">
                                        <div class="row" :key="i">
                                            <template v-for="(item, index) in row.line" >
                                                <div class="col"
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
                                <div style="border-left:1px solid grey" class="col">
                                    <template v-for="(item, index) in sideKicks.rune">
                                        <div class="row" :key="index">
                                            <template v-for="(item1, index1) in item.line">
                                                <div :key="index1" class="col-3">
                                                    <i
                                                        :class="[chooseRune(index1,checkedRune2[index])]"
                                                        class="img-champ"
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
</template>


<script>
import dataChampions from "@/data.json";
import datasideKick from "@/sideKick.json";
import dataRune from "@/rune.json";
export default ({
    data() {
        return {
            searchName: "",
            champions: [],
            runes: [],
            sideKicks: {},
            selectedChamp: { img: "annana.jpg" },
        };
    },
    mounted() {
        this.champions = dataChampions;
        this.sideKicks = datasideKick;
        this.runes = dataRune;
    },
    methods:{
        chooseRune(index, picked){
            return index != picked ? 'enabled-rune' : 'checked-rune'
        }
    },
    computed: {
        championsData() {
            return this.searchName == ""
                ? this.champions
                : this.champions.filter((x) =>
                      x.name.toLowerCase().includes(this.searchName)
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
<style scope>
.img-champ {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 10px;
}
.champion {
    border: 1px solid rgb(129, 124, 124);
    transition-duration: 0.6s;
}

.champion:hover {
    transition-duration: 0.4s;
    border: 1px solid green;
    background-color: rgb(157, 219, 214);
    color: whitesmoke;
}
.dot-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.clearable {
    pointer-events: auto;
    text-decoration: none;
    cursor: pointer;
}
.enabled-rune{
    filter: opacity(0.35);
    mix-blend-mode: luminosity;
}
.checked-rune{
    filter: drop-shadow(1px 4px 6px gray);
    background-color: #8f8f8f69;
    border-radius: 15px;
}
.disabled-rune i{
   filter: opacity(0.35);
    mix-blend-mode: luminosity;
}
</style>
