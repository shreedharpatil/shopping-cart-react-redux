import React from 'react';
import { connect } from 'react-redux';
import Toast from 'react-bootstrap/Toast';
import {hideToaster} from '../actions/cartActions';

class Toaster extends React.Component{

    render(){

    return (
                <Toast onClose={() => this.props.hideToaster()} show={this.props.toaster.show} delay={3000} autohide={true} style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    zIndex : 10000,
                    backgroundColor: 'antiquewhite'
                  }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{this.props.toaster.heading}</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>
                        <strong>{this.props.toaster.content}</strong>
                    </Toast.Body>
            </Toast>
        );
    }
}

const mapStateToProps = (state) => ({
    toaster : state.cart.toaster
});

export default connect(mapStateToProps, {hideToaster})(Toaster);