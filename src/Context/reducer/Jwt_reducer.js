const initialstate = {
    token : [],
}

export const Jwt_reducer = (state=initialstate,action)=>{
    switch(action.type){
        case 'Store_Jwt_Succes':
            return {
                ...state, token:action.payload,
            };
        default:
            return state ;
    }
}
