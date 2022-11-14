const initialstate = {
    Category_details:[],
}

export const Fetch_Category_reducer =(state=initialstate,action)=>{
    switch (action.type) {
        case 'Fetch_Category':
            return {
                ...state, Category_details:action.payload
            }
        default:
            return state;
    }
}