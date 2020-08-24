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
      runes: x.runes,
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
    },
    RECENT_CHAMP(state, recent){
      state.recent = recent
    },
    LANGUAGE(state, locale){
      state.locale = locale
    },
  },
  actions: {
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
      data = data.size > 10 ? [...data].slice(0, 10) : data
      commit('RECENT_CHAMP', data)
    },
  },
  modules: {
  }
})
