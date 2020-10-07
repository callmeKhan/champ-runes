
// import Spell need to map
// source from: https://blitz-cdn-plain.blitz.gg/blitz/ddragon/10.16.1/data/en_US/summoners.json
/* Example output: key-spell.json */
// import item from '@/data/raw-data/raw-item-blitz.json'
function mapItem() {
    let rs = []
    for (let [item, index] of Object.entries(item)) {
        if(index.maps.includes('11')) rs.push(item)
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


// UPDATE CHAMPION LIST. STEP 1
// https://blitz-cdn-plain.blitz.gg/blitz/ddragon/10.19.1/data/en_US/champions.json
// get champion list from blit
// convert from { "Aatrox" : {"key","name","stat","spell","tips"}} => {"name", "tip"}
// output: key-champ.json
import champList from '@/data/raw-data/raw-champion-blitz.json'
function mapChampion() {
    let rs = Object.values(champList).map(x => {
        return { id: x.key, name: x.name, tips: x.tips }
    })
    console.log(JSON.stringify(rs));
    return rs
}

// UPDATE CHAMPION STAT. STEP 2
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
                big_item_builds: x.stats.most_common_big_item_builds.build,
                starting_items: x.stats.most_common_starting_items.build,
                skills: x.stats.most_common_skills.build,
                core_builds: x.stats.most_common_core_builds.build,
                runes: x.stats.most_common_runes.build,
                rune_stat_shards: x.stats.most_common_rune_stat_shards.build,
                spells: x.stats.spells.build
            }
        }
    })
    console.log(JSON.stringify(arr))
    return arr
}
// UPDATE CHAMPION DATA. STEP 3
// get list champion skill from OP.GG, using parser.py -> raw-OPGG.json
// merge data {OP.GG , key-champ.json}
/*
return file rs.json => data_ver.json
*/
import data from '@/data/raw-data/raw-OPGG.json'
import keyData from '@/data/z/key-champ.json'

const name = {
    "Cho'Gath": 'ChoGath',
    "Dr. Mundo": 'DrMundo',
    "Jarvan IV": 'JarvanIV'
}

function mapKeyData() {
    return data.map(x => {
        return {
            skill: x.skill,
            name: x.name,
            key: Object.keys(name).includes(x.name) ? name[x.name] : x.name,
            id: parseInt(keyData.find(y => y.name == x.name).id)
        }
    })
}



export default {
    mergeSpellnameIntoMainData,
    mapKeyData,
    mapMainRawData,
    mapRune,
    mapItem,
    mapChampion
}