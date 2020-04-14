const config = require('../config')


export default {
    state: {
        regData: new Object()
    },
    actions: {
        async getDBRegData(ctx){
            let response = await fetch(config.server + '/regData',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            let rewrittenData = new Object()
            let selectors = new Array("код_направления","направление_подготовки","профиль_подготовки")
            for (let i in selectors){
                rewrittenData[selectors[i]] = new Array()
            }
            for (let i=1;i<data.length;i++){
                let flag = new Array()
                for (let n in selectors){
                    rewrittenData[selectors[n]][0] = data[0][selectors[n]]
                    flag[n] = false
                    for (let j=0;j<rewrittenData[selectors[n]].length;j++){
                        if(data[i][selectors[n]]==rewrittenData[selectors[n]][j]){
                            flag[n] = true
                        }
                    }
                    if (flag[n]==false){
                        rewrittenData[selectors[n]].push(data[i][selectors[n]])
                    }
                }
            }
            ctx.commit('updRegData',rewrittenData)
        }
    },
    mutations: {
        updRegData(state,rewrittenData){
            state.regData = rewrittenData
        }
    },
    getters: {
        getRegData(state){          
            return state.regData
        }
    },
}