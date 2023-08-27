import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        Userstate: {
            userId: undefined,
            username: undefined,
            nickname: undefined,
            address: undefined,
        },
        historySearch: [
            {name: "ok1", address: "我的家1",location:""},
        ]
    },
    mutations: {
        setUser(state, user) {
            state.Userstate = user
        },
        insertSearch(state, newAddress) {
            if(!state.historySearch.find((item) => item.name===newAddress.nickname)){
                const temp = {
                    name: newAddress.nickname,
                    address: newAddress.address,
                }
                if(newAddress.location){
                    temp.location = "116.473168,39.993015"//北京
                }else{
                    temp.location = newAddress.location
                }
                state.historySearch.push({
                    temp
                })
            }
            // console.log(state.historySearch)

        }
    },
    getters: {
        getUser: function (state) {
            return state.Userstate
        },
        getPoi: function (state) {
            return state.historySearch
        }
    }

})

export default store