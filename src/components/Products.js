import React from 'react';
import { connect } from 'react-redux';
import {fetchProducts } from '../actions/productActions';
import {addProductToCart} from '../actions/cartActions';

class Products extends React.Component {
    
    componentWillMount(){
        this.props.fetchProducts();
    }

    render(){
        const productStyle = { height : '100px', width : '100px'};
        const card = { width : '200px', marginBottom : '5px'};
        const prods = (
            <div class="card-deck">
            { this.props.products.map(p => (
                <div>
                    <div className="card" style={card}  id= {p.id}>
                    <img  className="card-img-top" style={productStyle} src={p.img} alt="card"/>
                    <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                        <button href="#" className="btn btn-danger" onClick={() => this.props.addProductToCart(this.props.cart, {...p, units : 1})}>Add To Cart</button>
                        <span>&#8377;{p.price} </span>
                    </div>
                </div>
                </div>
            ))}
            </div>  
        );

        return (
            <div class="row">
                    {prods}
            </div>
                   
        );
    }    
};

const mapStateToProps = (state) => ({
    products : state.products.filteredProducts,
    cart : state.cart.cart
});

export default connect(mapStateToProps, {fetchProducts, addProductToCart })(Products);