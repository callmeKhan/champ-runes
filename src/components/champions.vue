<template>
    <div class="container">
        <div v-if="!show" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div v-if="show">
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
                                    <div class="row">
                                        <template
                                            v-for="(item, index) in arrImgInLineMain"
                                        >
                                            <div
                                                :class="[lessItemsMainCols]"
                                                :key="index"
                                                v-if="index < lessItemsMain"
                                            >
                                                <i
                                                    class="img-champ"
                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+item)+')'}"
                                                ></i>
                                            </div>
                                        </template>
                                        <template
                                            v-for="(item, index) in arrImgInLineMain"
                                        >
                                            <div
                                                class="col-4"
                                                
                                                :key="index"
                                                v-if="index >= lessItemsMain"
                                            >
                                                <i
                                                    class="img-champ"
                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+item)+')'}"
                                                ></i>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                <div style="border-left:1px solid grey" class="col ml-2 mr-3">
                                    <div class="row">
                                        <template
                                            v-for="(item, index) in arrImgInLineSk1"
                                        >
                                            <div
                                                class="col-4"
                                                :key="index"
                                                v-if="index > lessItems && index < 10"
                                            >
                                                <i
                                                    class="img-champ"
                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+item)+')'}"
                                                ></i>
                                            </div>
                                        </template>
                                        <template
                                            v-for="(item, index) in arrImgInLineSk1"
                                        >
                                            <div
                                                :class="[lessItemsCols]"
                                                :key="index"
                                                v-if="index > 9 "
                                            >
                                                <i
                                                    class="img-champ"
                                                    :style="{'background-image': 'url('+require('@/assets/rune/'+item)+')'}"
                                                ></i>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                <div style="border-left:1px solid grey" class="col">
                                    <template v-for="(item, index) in sideKicks.rune">
                                        <div class="row" :key="index">
                                            <template v-for="(item1, index1) in item">
                                                <div :key="index1" class="col-3">
                                                    <i
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
            show: false,
            searchName: "",
            champions: [],
            runes: [],
            sideKicks: {},
            selectedChamp: { img: "annana.jpg" },
            count: 0,
            line: 2,
            countSK1: 0,
            lineSK1: 1,
            countSK2: 0,
            lineSK2: 0,
        };
    },
    mounted() {
        this.champions = dataChampions;
        this.sideKicks = datasideKick;
        this.runes = dataRune;
        console.log(this.runes);
        
        setTimeout(() => {
            this.show = true;
        }, 500);
    },
    methods:{
        mapAndIndex(index, indexRune){
            const exept = ['Resolve','Inspiration','Sorcery']
            let indexLine = null // dòng 
            
            index = exept.includes(indexRune[0]) ? index + 1 : index        
            if(index == 4 || index == 7 || index == 10) {indexLine = 0;}        //dòng 1
            else if(index == 5 || index == 8 || index == 11) {indexLine = 1}    //dòng 2
            else if(index == 13) {indexLine = 3}
            else {indexLine = 2}                                                //dòng 3

            const rs = indexLine != indexRune[this.line]                        //so sánh dòng để bôi xám
            // console.log(`vị trí: ${indexLine}| dòng : ${this.line} | json: ${indexRune[this.line]}`);
            this.count += 1                                                     //cập nhật số lần chạy hàm.
            if(this.count == 3 || this.count == 6) this.line += 1    // 3 lần chạy => dòng mới
            return rs
        },
        mapAndIndexSidekick1(index, indexSideKick){
            let indexLine = null // dòng 
            const exept = ['Resolve','Inspiration','Sorcery']
            index = exept.includes(indexSideKick[0]) ? index + 1 : index        
            

            if(index == 4 || index == 7 || index == 10){indexLine = 0;}        //dòng 1
            else if(index == 5 || index == 8 || index == 11) {indexLine = 1}    //dòng 2
            else if(index == 13) {indexLine = 3}
            else {indexLine = 2}                                                //dòng 3

            const rs = indexLine != indexSideKick[this.lineSK1]                        //so sánh dòng để bôi xám
            this.countSK1 += 1                                                     //cập nhật số lần chạy hàm.
            if(this.countSK1 == 3 || this.countSK1 == 6) this.lineSK1 += 1    // 3 lần chạy => dòng mới
            return rs
        },
         mapAndIndexSidekick2(index, indexSidekick2){
            let indexLine = null // dòng 

            if(index == 0 || index == 3 || index == 6){indexLine = 0;}        //dòng 1
            else if(index == 1 || index == 4 || index == 7) {indexLine = 1}    //dòng 2
            else {indexLine = 2}                                                //dòng 3

            const rs = indexLine != indexSidekick2[this.lineSK2]                        //so sánh dòng để bôi xám
            this.countSK2 += 1                                                     //cập nhật số lần chạy hàm.
            if(this.countSK2 == 3 || this.countSK2 == 6 || this.countSK2 == 9) this.lineSK2 += 1    // 3 lần chạy => dòng mới
            return rs
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
        mapSideKick1() {
            return this.sideKick1
                ? this.runes.find((x) => x.key == this.sideKick1)
                : [];
        },
        arrImgInLineSk1(){
            return this.mapSideKick1 ? this.mapSideKick1.arrImgInLine : []
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
        },
        lessItems(){
            const exept = ['Sorcery', 'Resolve', 'Inspiration']
            return exept.includes(this.sideKick1) ? 2 : 3
        },
        lessItemsMain(){
            const exept = ['Sorcery', 'Resolve', 'Inspiration']
            return exept.includes(this.indexMain) ? 3 : 4
        },
        lessItemsCols(){
            const exept = ['Sorcery', 'Resolve', 'Inspiration','Precision']
            return exept.includes(this.sideKick1) ? 'col-4' : 'col-3'
        },
        lessItemsMainCols(){
            const exept = ['Sorcery', 'Resolve', 'Inspiration']
            return exept.includes(this.indexMain) ? 'col-4' : 'col-3'
        },
        indexRune(){
            return this.selectedChamp ? (this.selectedChamp.runes ? (this.selectedChamp.runes.indexMain ? this.selectedChamp.runes.indexMain : 0) : 0) : 0
        },
        indexSidekick(){
            return this.selectedChamp ? (this.selectedChamp.runes ? (this.selectedChamp.runes.indexSide1 ? this.selectedChamp.runes.indexSide1 : 0) : 0) : 0
        },
        indexSidekick2(){
            return this.selectedChamp ? (this.selectedChamp.runes ? (this.selectedChamp.runes.indexSide2 ? this.selectedChamp.runes.indexSide2 : 0) : 0) : 0
        },
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
    mix-blend-mode: hard-light;
}
.disabled-rune i{
   filter: opacity(0.35);
    mix-blend-mode: luminosity;
}
</style>
