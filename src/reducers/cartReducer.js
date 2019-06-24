import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, MODIFY_PRODUCT_QUANTITY_IN_CART, SHOW_CART, HIDE_CART, HIDE_TOASTER } from "../actions/actionTypes";


const initialState = { cart : { show : false, items : [] }, toaster : { show : false, heading : '', content : '' } };
export default function(state = initialState, action){
    switch(action.type)
    {
        case ADD_PRODUCT_TO_CART :
        return {
            ...state, cart : { items : action.payload.items }, toaster : action.payload.toaster
        };

        case REMOVE_PRODUCT_FROM_CART :
        return { ...state, cart : { items : action.payload.items, show : action.payload.show }};

        case MODIFY_PRODUCT_QUANTITY_IN_CART :
        return { ...state, cart : { items : action.payload.items, show : action.payload.show }};

        case SHOW_CART :
            return { ...state, cart : { items : action.payload.items, show : action.payload.show }};

        case HIDE_CART :
                return { ...state, cart : { items : action.payload.items, show : action.payload.show }};

        case HIDE_TOASTER :
            return{
                ...state, toaster : { show : action.payload, heading : '', content : '' }
            };
        default :
        return state;
    }
};