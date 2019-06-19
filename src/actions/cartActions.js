import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, MODIFY_PRODUCT_QUANTITY_IN_CART } from "./actionTypes";

export const addProductToCart = (cart, product) => (dispatch) => {
    let index = cart.items.findIndex(p => p.id === product.id);
    let cartProducts;
    if(index >= 0)
    {
      cartProducts = cart.items.slice();
      let selectedProduct = cartProducts[index];
      let updatedProduct = { ...selectedProduct, units : selectedProduct.units + product.units};
      cartProducts[index] = updatedProduct;
    }
    else
    {      
        cartProducts = [...cart.items, product]
    }

    return dispatch({
        type : ADD_PRODUCT_TO_CART,
        payload : cartProducts
    });
};

export const removeCartProduct = (cart, item) => (dispatch) => {
    let index = cart.items.findIndex(p => p.id === item.id);

    if (index !== -1) {
      var cartProducts = cart.items.slice();
      cartProducts.splice(index, 1);

      return dispatch({
          type : REMOVE_PRODUCT_FROM_CART,
          payload : cartProducts
      });
    }
};

export const modifyProductQuantityInCart = (cart, item, quantity) => (dispatch) => {
    if(quantity < 1) return;
    var index = cart.items.findIndex(p => p.id === item.id);
   
    if(index >= 0){
      var cartProducts = cart.items.slice();
      var updatedProduct = cartProducts[index];
      updatedProduct.units = parseInt(quantity);
      cartProducts[index] = updatedProduct;

      return dispatch({
        type : MODIFY_PRODUCT_QUANTITY_IN_CART,
        payload : cartProducts
    });
    }
};