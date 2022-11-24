const initialstate = {
    product_item_id :'',
    product_image:"",
    size: "",
    colour:"",
    quantity: Number(),
}

export const Cart_reducer = (state=initialstate,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state,product_image:action.payload.product_image,product_item_id:action.payload.product_id,size:action.payload.size_value,colour:action.payload.colour_value,quantity:action.payload.quantity}
        default:
            return state
    }
}