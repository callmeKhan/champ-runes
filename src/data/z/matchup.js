import champion from '@/data/data-ver3.json'

const ids = champion.map(x => {
    return x.id
})

const count = ids.length

const path = '10.25'

let rs = []
    ids.forEach(id => {
        let i = 0
        axios.get(`https://beta.iesdev.com/api/lolstats/matchups/${id}?patch=${path}&queue=420&region=world&tier=PLATINUM_PLUS`)
            .then((res) => {
                if(res.data) {
                    if(res.data.data.length){
                        let arr = res.data.data.map(y => {
                            return {
                                id: y.champion_id,
                                opponent_champion_id: y.opponent_champion_id,
                                winRate: y.stats.lane_wins / y.stats.games,
                                role: y.role
                            }
                        })
                        rs.push(arr);
                    }
                }
            })
        })
    setTimeout(()=>{
        let result = rs.map(x => {
            return {
                id: x[0].id,
                match: x.map(z => {return {op_id: z.opponent_champion_id,role: z.role, rate: z.winRate}}).sort((a,b) => {return a.rate - b.rate})
            }
        })
        console.log(result);
    },10000)