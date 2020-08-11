import Vue from 'vue'
import Vuex from 'vuex'

import dataChampions from "@/data/data-ver2.json";
import datasideKick from "@/data/sideKick.json";
import dataRune from "@/data/rune.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listChamps: dataChampions.map(x => {return {...x, count: 0}}),
    listSideKick: datasideKick,
    listRunes: dataRune,
    selectedChamp: {},
    recent: [],
    locale: 'en'
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
    selectedChamp: state => state.selectedChamp || listChamps[0],
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
