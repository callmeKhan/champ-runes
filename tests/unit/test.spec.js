// Import the `mount()` method from Vue Test Utils
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Champions from '@/components/champions'
import localeEn from '@/locales/en.json'
import VueI18n from 'vue-i18n'

import dataChampions from "@/data/data-ver3.json";
import datasideKick from "@/data/sideKick.json";
import dataRune from "@/data/rune-ver2.json";
import stats from "@/data/z/stats-v2.json";

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueI18n)

const en = { en: localeEn }
const i18n = new VueI18n({
  locale: 'en', 
  fallbackLocale: 'en', 
  messages: en
})

describe('Click event', () => {
  let actions
  let store
  let state
  let getters
  let mutations

  beforeEach(() => {
    state = {
      listChamps: dataChampions.map(x => {return {
        ...x,
        count: 0,
      }}),
      listSideKick: datasideKick,
      listRunes: dataRune,
      listStats: stats,
      selectedChamp: {},
      recent: [],
      locale: 'en',
    },
    actions = {
      setRecent: jest.fn(),
      setHotpick: jest.fn(),
      changeLang: jest.fn(),
      selected: jest.fn(),
      recent: jest.fn(),
    },
    getters = {
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
    mutations = {
      SELECTED_CHAMP: jest.fn(),
      RECENT_CHAMP: jest.fn(),
      SET_RECENT: jest.fn(),
      LANGUAGE: jest.fn()
    },
    store = new Vuex.Store({
      mutations,
      getters,
      actions,
      state
    })
  })

  it('Click on each Champion', async () => {
    const wrapper = await mount(Champions, { store, localVue, i18n })
    let champion = wrapper.findAll('.champion')
    expect(champion).toHaveLength(151);
  })
})