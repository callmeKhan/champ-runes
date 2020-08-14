
// import data need to map
// source from: https://beta.iesdev.com/api/lolstats/champions?region=world&tier=PLATINUM_PLUS&queue=420
/* Example output: example.json */
function mapMainRawData() {
    let data = raw
    let arr = data['data'].map(x => {
    return {id: x.champion_id, role: x.role,
        stats: {big_item_builds: x.stats.big_item_builds.build,
            starting_items: x.stats.starting_items.build,
            skills: x.stats.skills.build,
            core_builds: x.stats.core_builds.build,
            runes: x.stats.runes.build,
            rune_stat_shards: x.stats.rune_stat_shards.build,
            spells: x.stats.spells.build}
        }
    })
    console.log(JSON.stringify(arr));
    return arr
}

// import Spell need to map
// source from: https://blitz-cdn-plain.blitz.gg/blitz/ddragon/10.16.1/data/en_US/summoners.json
/* Example output: key-spell.json */
function mapSpell(){
    let data = spell.data
    let rs = []
    for(let [item, index] of Object.entries(data)){
    rs.push({id: parseInt(index['key']), name: index['image']['full']})
    }
    return rs
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
import spell from "@/data/z/key-spell.json";
import stats from "@/data/z/stats-v2.json";
function mergeSpellnameIntoMainData(stats, spells) {
    return stats.map(x => {
        return {...x,
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

export default{
    mergeSpellnameIntoMainData
}