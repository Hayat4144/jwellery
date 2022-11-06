

const initialstate = {
    IsLogdin: false,
    IsError: false,
    IsSuccess: false,


}
const Sign_in_reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return { ...state, IsLogdin: true, IsSuccess: true };
        case 'IsLogout':
            return { ...state, IsLogdin: false };
        default:
            return state;
    }

}

export default Sign_in_reducer;