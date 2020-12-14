import Vue from 'vue'
import Vuex from 'vuex'

import dataChampions from "@/data/data-ver3.json";
import datasideKick from "@/data/sideKick.json";
import dataRune from "@/data/rune-ver2.json";
import stats from "@/data/z/stats-v2.json";
import key_spell from "@/data/z/key-spell.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listChamps: dataChampions.map(x => {return {
      count: 0,
      name: x.name,
      key: x.key,
      skill: x.skill,
      id: x.id,
    }}),
    listSideKick: datasideKick,
    listRunes: dataRune,
    listStats: stats,
    selectedChamp: {},
    recent: [],
    locale: 'en',
  },
  getters:{
    stats: state => state.listStats,
    language: state => state.locale,
    champions: state => state.listChamps,
    sideKicks: state => state.listSideKick,
    runes: state => state.listRunes,
    recent: state => state.recent,
    hotPick: state => [...state.listChamps]
                        .filter(x => x.count > 0)
                        .sort((a, b) => a.count < b.count ? 1 : (a.count > b.count ? -1 : 0))
                        .slice(0,5),
    selectedChamp: state => {
      let champ = state.selectedChamp || listChamps[0]
      let stats = state.listStats.filter(x => x.id == champ.id)
      stats = stats.map(x => {
        return {id: x.id, role: x.role, big_item_builds: x.stats.big_item_builds, 
          core_builds: x.stats.core_builds, skills: x.stats.skills, 
          starting_items: x.stats.starting_items,
          runes: x.stats.runes,
          rune_stat_shards: x.stats.rune_stat_shards,
          // map id-spell into name-spell
          spells: x.stats.spells.map(xx => {
            return key_spell.find(item => item.id == xx).name
        })
        }
      })
      return {...champ, stats: stats}
    },
  },
  mutations: {
    SELECTED_CHAMP(state, data){
      
      state.selectedChamp = data.item
      state.listChamps[data.indexChamp].count++
      data = state.listChamps
        .filter(x => x.count)
        .sort((a,b)=> {return (a.count > b.count) ? -11 : (a.count < b.count ? 1 : 0)})
        .slice(0,5)
        .map(y => {return {id: y.id, count: y.count}})
      data = JSON.stringify(data)
      localStorage.setItem('most-choose', data)

    },
    RECENT_CHAMP(state, recent){
      state.recent = recent
    },
    LANGUAGE(state, locale){
      localStorage.setItem('lang', locale)
      state.locale = locale
    },
    SETHOTPICK(state, champs){
      if(champs.length){
        champs.forEach(x =>{
          const champ = state.listChamps.find(y => y.id === x.id)
          champ.count = x.count
        })
      } else {
        localStorage.removeItem('most-choose')
        state.listChamps.forEach(x => {
          x.count = 0
        })
      }
    }
  },
  actions: {
    resetHotPickFromStore({ commit }){
      commit('SETHOTPICK', [])
    },
    setHotPickFromStore({ commit }, champions){
      if(champions && champions.length){
        commit('SETHOTPICK', champions)
      }
    },
    changeLang({ commit }, locale){
      commit('LANGUAGE', locale)
    },
    selected({ commit, state }, item) {
      let indexChamp = state.listChamps.findIndex(x => x.name == item.name)
      commit('SELECTED_CHAMP', {item, indexChamp})

    },
    recent({ commit, state }, item){
      let tmp = [...state.recent]
      tmp.unshift(item)
      let isDuplicate = (new Set(tmp)).length != tmp.length
      let data = isDuplicate ? new Set(tmp) : tmp
      data = data.size > 5 ? [...data].slice(0, 5) : data
      commit('RECENT_CHAMP', data)
    },
  },
  modules: {
  }
})
