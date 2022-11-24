export const ADD_TO_CART = (cart_data) => {
    return {
        type: 'ADD_TO_CART',
        payload: cart_data
    }
}

export const REMOVE_ITEM_FROM_CART = (product_id) => {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        payload: product_id
    }
}

export const INCREASE_QUANTITY = (quanity)=>{
    return {
        type:'INCREASE_QUANTITY',
        payload:quanity
    }
}


export const DECREASE_QUANTITY= (quanity)=>{
    return {
        type:'DECREASE_QUANTITY',
        payload :quanity
    }
}