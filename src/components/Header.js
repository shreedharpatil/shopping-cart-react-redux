import React from 'react';
import Filter from '../components/Filter';
import ModelCart from '../components/ModalCart';
import {showCart} from '../actions/cartActions';
import { connect } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class Header extends React.Component{
    
    render(){
        const carticon = {
            float : 'right',
            marginTop : '-5px'
        };

        return(
            <div class="row">
                <div class="col-sm-7"><Filter /></div>
                <div className="col-sm-5">
                    <Button variant="danger" style={carticon} className="btn btn-danger" onClick={() =>this.props.showCart(this.props.cart)}>
                        <i class="fa fa-shopping-cart"></i> <Badge variant="light">{this.props.cart.items.length}</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                </div>
                <ModelCart />
            </div>
        );
    };
}


const mapStateToProps = (state) => ({
    cart : state.cart.cart
  });
  export default connect(mapStateToProps, {showCart})(Header);