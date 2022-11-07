const initialstate = {
    details: [],
}

export const User_Details_reducer = (state=initialstate,action)=>{
    switch (action.type) {
        case 'User_Details':
            return {
                ...state ,details:action.payload,
            };
            
        default:
            return state;
    }
}