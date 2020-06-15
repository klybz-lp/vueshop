export default {
    increment({commit,state}){
        commit('inc')  //调用mutations里的inc方法
    },
    decrement({commit,state}){
        if(state.number > 0) commit('dec')  
    }
}