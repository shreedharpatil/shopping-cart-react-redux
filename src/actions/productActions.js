import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TYPE, ORDER_PRODUCTS_BY_PRICE } from "./actionTypes";

export const fetchProducts = () => (dispatch) => {
    const products = [
        {
          id: 1, name: 'Apple', description: 'Apple fruit.', img: 'images/apple.jpg', price: 20, type : 'Fruit'
        },
        {
          id: 2, name: 'Banana', description: 'Banana fruit.', img: 'images/banana.jpg', price: 5, type : 'Fruit'
        },
        {
          id: 3, name: 'Watermelon', description: 'Watermelon fruit.', img: 'images/watermelon.jpg', price: 80, type : 'Fruit'
        },
        {
          id: 4, name: 'Mango', description: 'Mango fruit.', img: 'images/mango.jpg', price: 50, type : 'Fruit'
        },
        {
          id: 5, name: 'Pineapple', description: 'Pineapple fruit.', img: 'images/pineapple.jpg', price: 50, type : 'Fruit'
        },
        {
          id: 6, name: 'JackFruit', description: 'Jack fruit.', img: 'images/jackfruit.jpg', price: 50, type : 'Fruit'
        },
        {
          id: 7, name: 'Onion', description: 'Onion Vegetable.', img: 'images/onion.jpg', price: 80, type : 'Vegetable'
        },
        {
          id: 8, name: 'Tomato', description: 'Tomato Vegetable.', img: 'images/tomato.jpg', price: 25, type : 'Vegetable'
        },
        {
          id: 9, name: 'Potato', description: 'Potato Vegetable.', img: 'images/potato.jpeg', price: 40, type : 'Vegetable'
        },
        {
          id: 10, name: 'Carrot', description: 'Carrot Vegetable.', img: 'images/carrot.jpg', price: 30, type : 'Vegetable'
        }
      ];

    return dispatch({
        type : FETCH_PRODUCTS,
        payload : { products : products, filteredProducts : products }
    });
};

export const filterProducts = (products, filterText) => (disptach) => {
    let filteredProducts = [];
    if(filterText === "All")
    {
      filteredProducts = products;
    }
    else
    {
      filteredProducts = products.filter(p => p.type === filterText);
    }
    
    return disptach({
      type : FILTER_PRODUCTS_BY_TYPE,
      payload : {
        items : filteredProducts,
        filterBy : filterText
      }
    });
};

export const orderProductsByPrice = (products, orderByText) => (dispatch) => {
    if(orderByText !== ''){
        products.sort((a, b) => (orderByText === "Lowest" ? 
         (a.price > b.price ? 1 : -1) 
         : (a.price < b.price ? 1 : -1) ))
    }

    return dispatch({
      type : ORDER_PRODUCTS_BY_PRICE,
      payload : {
        items : products.slice(),
        orderBy : orderByText
      }
    });
};