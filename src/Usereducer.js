const transReducer = ((state, action)=>{
    switch (action.type){
        case "addTrans": {
            return [action.payload, ...state]
        }
        // case "delTrans":{
        //     return [action.payload, ...state]
        // }
        default:
            return state;
    }

})

export default transReducer;