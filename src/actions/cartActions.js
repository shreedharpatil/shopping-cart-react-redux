import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, MODIFY_PRODUCT_QUANTITY_IN_CART, SHOW_CART, HIDE_CART, HIDE_TOASTER } from "./actionTypes";

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
        payload : { 
            items : cartProducts,
            toaster : { show : true, heading : 'Product Added', content : 'Product ' + product.name + ' added to cart' }
        }
    });
};

export const removeCartProduct = (cart, item) => (dispatch) => {
    let index = cart.items.findIndex(p => p.id === item.id);

    if (index !== -1) {
      let cartProducts = cart.items.slice();
      cartProducts.splice(index, 1);

      return dispatch({
          type : REMOVE_PRODUCT_FROM_CART,
          payload : {
            items : cartProducts,
            show : cart.show
        }
        //   payload : cartProducts
      });
    }
};

export const modifyProductQuantityInCart = (cart, item, quantity) => (dispatch) => {
    if(quantity < 1) return;
    let index = cart.items.findIndex(p => p.id === item.id);
   
    if(index >= 0){
      let cartProducts = cart.items.slice();
      let updatedProduct = cartProducts[index];
      updatedProduct.units = parseInt(quantity);
      cartProducts[index] = updatedProduct;

      return dispatch({
        type : MODIFY_PRODUCT_QUANTITY_IN_CART,
        payload : {
            items : cartProducts,
            show : cart.show
        }
        // payload : cartProducts
    });
    }
};

export const showCart = (cart) => (dispatch) => {
    return dispatch({
        type : SHOW_CART,
        payload : {
            items : cart.items,
            show : true
        }
    });
};

export const hideCart = (cart) => (dispatch) => {
    return dispatch({
        type : HIDE_CART,
        payload : {
            items : cart.items,
            show : false
        }
    });
};

export const hideToaster = (cart) => (dispatch) => {
    return dispatch({
        type : HIDE_TOASTER,
        payload : false
    });
};