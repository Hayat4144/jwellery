const initialstate = {
    token : [],
}

export const Jwt_reducer = (state=initialstate,action)=>{
    switch(action.type){
        case 'Store_Jwt_Succes':
            return {
                ...state, token:action.payload,
            };
        case "Clear_JWT_Token":
            return {
                ...state, token: []
            }
        default:
            return state ;
    }
}
