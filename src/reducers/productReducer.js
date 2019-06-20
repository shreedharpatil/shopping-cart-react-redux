import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TYPE, ORDER_PRODUCTS_BY_PRICE } from "../actions/actionTypes";

const initialState = { orderBy : 'Lowest', filterBy : 'All', products : [], filteredProducts : [] };
export default function(state=initialState, action){

    switch(action.type)
    {
        case FETCH_PRODUCTS :
        return {
            ...state, products : action.payload.products, filteredProducts : action.payload.filteredProducts
        };        

        case FILTER_PRODUCTS_BY_TYPE :
        return{
            ...state, filteredProducts : action.payload.items, filterBy : action.payload.filterBy
        }

        case ORDER_PRODUCTS_BY_PRICE :
        return{
            ...state, filteredProducts : action.payload.items, orderBy : action.payload.orderBy
        }

        default:
        return state;
    }
}