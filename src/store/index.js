import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state : {
        Userstate: {
            userId : undefined,
            username: "hello world",
            nickname: undefined,
            address : undefined,
        },
        historySearch:[
            "我的家"
        ]
    },
    mutations:{
        setUser(state,user){
            state.Userstate = user
        },
        insertSearch(state,location){
            state.historySearch.push(location)
        }
    },
    getters:{
        getUser: function (state){
            return state.Userstate
        },
        getPoi: function (state){
            return state.historySearch
        }
    }

})

export default store