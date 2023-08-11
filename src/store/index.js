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
        }
    },
    mutations:{
        setUser(state,user){
            state.Userstate = user
        }
    },
    getters:{
        getUser: function (state){
            return state.Userstate
        }
    }

})

export default store