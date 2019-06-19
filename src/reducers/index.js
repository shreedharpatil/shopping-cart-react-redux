import productReducer from "./productReducer";
import {combineReducers} from 'redux';
import cartReducer from "./cartReducer";

export default combineReducers({
    products : productReducer,
    cart : cartReducer
});