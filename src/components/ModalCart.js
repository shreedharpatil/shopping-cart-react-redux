import React from 'react';
import { connect } from 'react-redux';
import {hideCart} from '../actions/cartActions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cart from './Cart';

class ModelCart extends React.Component{
    
    render(){
        
        return(
            <Modal show={this.props.cart.show} onHide={() => this.props.hideCart(this.props.cart)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cart />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.hideCart(this.props.cart)}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={() => this.props.hideCart(this.props.cart)}>
                    Checkout
                    </Button>
                </Modal.Footer>
        </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    cart : state.cart.cart
});

export default connect(mapStateToProps, {hideCart})(ModelCart);