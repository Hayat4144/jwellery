export const ADD_TO_CART = (cart_data)=>{
    return {
        type:'ADD_TO_CART',
        payload:cart_data
    }
}

export const REMOVE_CART = (product_id)=>{
    return {
        type:'REMOVE_CART',
        payload:product_id
    }
}