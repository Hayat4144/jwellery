import { useSelector } from "react-redux"

const initialstate = {
    // product_item_id :'',
    // product_image:"",
    // size: "",
    // colour:"",
    // quantity: Number(),
    productItems: []
}

export const Cart_reducer = (state = initialstate, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const IsItemExist = state.productItems.find((i) => i.product_item_id === item.product_item_id ? true : false)
            if (IsItemExist) {
                return {
                    ...state,
                    productItems: state.productItems.map((i) =>
                        i.product_item_id === IsItemExist.product_item_id ? item : i
                    ),
                };
            }
            else {
                return {
                    ...state,
                    productItems: [...state.productItems, item]
                }
            }

        case "REMOVE_ITEM_FROM_CART":
            return {
                ...state, productItems: state.productItems.filter((i) => i.product_item_id !== action.payload.product_item_id)
            }
        case 'INCREASE_QUANTITY':
            return {
                ...state, productItems: state.productItems.map((i) => i.product_item_id === action.payload.product_item_id ? { ...i, quantity: action.payload.quantity } : i)
            }

        case 'DECREASE_QUANTITY':
            return {
                ...state, productItems: state.productItems.map((i) => i.product_item_id === action.payload.product_item_id ? { ...i, quantity: action.payload.quantity } : i)
            }
        default:
            return state;
    }
}