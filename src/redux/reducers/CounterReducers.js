const INITIAL_STATE={
    angka:0
}

export default (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case 'TAMBAH':
            return {...state,angka:state.angka+action.payload}
        case 'KURANG':
            return {...state,angka:state.angka-1}
        default:
            return state
    }
}