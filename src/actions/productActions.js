import { FETCH_PRODUCTS } from "./actionTypes";

export const fetchProducts = () => (dispatch) => {
    const products = [
        {
          id: 1, name: 'Apple', description: 'Apple fruit.', img: 'images/apple.jpg', price: 20
        },
        {
          id: 2, name: 'Banana', description: 'Banana fruit.', img: 'images/banana.jpg', price: 5
        },
        {
          id: 3, name: 'Watermelon', description: 'Watermelon fruit.', img: 'images/watermelon.jpg', price: 80
        },
        {
          id: 4, name: 'Mango', description: 'Mango fruit.', img: 'images/mango.jpg', price: 50
        },
        {
          id: 5, name: 'Pineapple', description: 'Pineapple fruit.', img: 'images/pineapple.jpg', price: 50
        },
        {
          id: 6, name: 'JackFruit', description: 'Jack fruit.', img: 'images/jackfruit.jpg', price: 50
        }
      ];

    return dispatch({
        type : FETCH_PRODUCTS,
        payload : products
    });
};