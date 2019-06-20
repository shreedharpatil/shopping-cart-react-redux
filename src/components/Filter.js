import { connect } from "react-redux";
import React from 'react';
import {filterProducts, orderProductsByPrice} from '../actions/productActions';
import Dropdown from 'react-bootstrap/Dropdown';

class Filter extends React.Component {

    render(){
        const dropdownStyle = { marginTop : '-6px' };
        return(
            <div className="row">
                    <div className="col-sm-4">
                        <h5>{this.props.filteredProducts.length} products found</h5>
                    </div>
                    <div className="col-sm-2"><span>Filter By</span></div>
                    <div className="col-sm-2" style={dropdownStyle}>                        
                        <Dropdown onSelect={(value, e) => this.props.filterProducts(this.props.products, value)}>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            {this.props.filterBy}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="All" >All</Dropdown.Item>
                                <Dropdown.Item eventKey="Fruit" >Fruits</Dropdown.Item>
                                <Dropdown.Item eventKey="Vegetable" >Vegetables</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-sm-2"><span>Order By</span></div>
                    <div className="col-sm-2" style={dropdownStyle}>
                        <Dropdown onSelect={(value, e) => this.props.orderProductsByPrice(this.props.filteredProducts, value)}>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic1">
                                {this.props.orderBy}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="Highest" >Highest</Dropdown.Item>
                                <Dropdown.Item eventKey="Lowest" >Lowest</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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