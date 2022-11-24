export const Store_Jwt_Succes = (token) => {
    return {
        type: 'Store_Jwt_Succes',
        payload: token
    }
}

export const Clear_JWT_Token = () => {
    return {
        type: 'Clear_JWT_Token',

    }
}