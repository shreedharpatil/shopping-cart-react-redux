import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, MODIFY_PRODUCT_QUANTITY_IN_CART } from "../actions/actionTypes";


const initialState = { cart : { items : [] }};
export default function(state = initialState, action){
    switch(action.type)
    {
        case ADD_PRODUCT_TO_CART :
        return {
            ...state, cart : { items : action.payload }
        };

        case REMOVE_PRODUCT_FROM_CART :
        return { ...state, cart : { items : action.payload } };

        case MODIFY_PRODUCT_QUANTITY_IN_CART :
        return { ...state, cart : { items : action.payload } };

        default :
        return state;
    }
};