import { connect } from "react-redux";
import React from 'react';
import {filterProducts, orderProductsByPrice} from '../actions/productActions';

class Filter extends React.Component {

    render(){
        return(
            <div className="row">
                    <div className="col-sm-4">
                        <h5>{this.props.filteredProducts.length} products found</h5>
                    </div>
                    <div className="col-sm-4">
                        <span>Filter By</span>
                        <select value={this.props.filterBy} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="All">All</option>
                            <option value="Fruit">Fruits</option>
                            <option value="Vegetable">Vegetables</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                    <span>Order  By</span>
                    <select value={this.props.orderBy} onChange={(e) => this.props.orderProductsByPrice(this.props.filteredProducts, e.target.value)}>
                            <option value="Highest">Highest</option>
                            <option value="Lowest">Lowest</option>
                        </select>
                    </div>
            </div>
        );
    }    
};

const mapStateToProps = (state) => ({
    products : state.products.products,
    filteredProducts : state.products.filteredProducts,
    orderBy : state.products.orderBy,
    filterBy : state.products.filterBy
});
export default connect(mapStateToProps, {filterProducts, orderProductsByPrice})(Filter);