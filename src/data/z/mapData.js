
// import Spell need to map
// source from: https://blitz-cdn-plain.blitz.gg/blitz/ddragon/10.16.1/data/en_US/summoners.json
/* Example output: key-spell.json */
function mapSpell() {
    let data = spell.data
    let rs = []
    for (let [item, index] of Object.entries(data)) {
        rs.push({ id: parseInt(index['key']), name: index['image']['full'] })
    }
    return rs
}


// import RUNE need to map
// source from: https://blitz-cdn-plain.blitz.gg/blitz/ddragon/10.16.1/data/en_US/runes.json
/* Example output: rune.json */
import rune from '@/data/raw-data/raw-rune-blitz.json'

function mapRune() {
    return rune.map(x => {
        return {
            ...x,
            id: parseInt(x.id),
            slots: x.slots.map(y => {
                return {
                    runes: y.runes.map(z => {
                        return {
                            id: parseInt(z.id),
                            key: z.key,
                            name: z.name,
                            icon: z.icon
                        }
                    })
                }
            })
        }
    })
}


/*
merge spell name into main data
input: 
{
    ...
    stats: {
        ...
        spell: [1, 2]
    }
output: 
{
    ...
    stats: {
        ...
        spell: [name1.png, name2.png]
    }
    */
import spell from "@/data/z/key-spell.json"
import stats from "@/data/z/stats-v2.json"
function mergeSpellnameIntoMainData() {
    return stats.map(x => {
        return {
            ...x,
            stats: {
                big_item_builds: x.stats.big_item_builds,
                core_builds: x.stats.core_builds,
                rune_stat_shards: x.stats.rune_stat_shards,
                runes: x.stats.runes,
                skills: x.stats.skills,
                starting_items: x.stats.starting_items,
                spells: x.stats.spells.map(xx => {
                    return spells.find(item => item.id == xx).name
                })
            }
        }
    })
}


// import data need to map
// source from: https://beta.iesdev.com/api/lolstats/champions?region=world&tier=PLATINUM_PLUS&queue=420
/*
    return file rs-stat.json => stat-v{}.json
    */
import rawBlitz from '@/data/raw-data/raw-blitz.json'
function mapMainRawData() {
    let data = rawBlitz
    let arr = data['data'].map(x => {
        return {
            id: x.champion_id, role: x.role,
            stats: {
                big_item_builds: x.stats.big_item_builds.build,
                starting_items: x.stats.starting_items.build,
                skills: x.stats.skills.build,
                core_builds: x.stats.core_builds.build,
                runes: x.stats.runes.build,
                rune_stat_shards: x.stats.rune_stat_shards.build,
                spells: x.stats.spells.build
            }
        }
    })
    console.log(JSON.stringify(arr))
    return arr
}
// merge data {OP.GG , key-champ.json}
/*
return file rs.json => data_ver.json
*/
import data from '@/data/raw-data/raw-OPGG.json'
import keyData from '@/data/z/key-champ.json'
function mapKeyData() {
    return data.map(x => {
        return {
            skill: x.skill,
            name: x.name,
            runes: x.runes,
            id: parseInt(keyData.find(y => y.name == x.name).id)
        }
    })
}


export default {
    mergeSpellnameIntoMainData,
    mapKeyData,
    mapMainRawData,
    mapRune
}