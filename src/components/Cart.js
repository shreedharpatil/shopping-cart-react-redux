import React from 'react';
import { connect } from 'react-redux';
import {removeCartProduct, modifyProductQuantityInCart} from '../actions/cartActions';

class Cart extends React.Component 
{
    totalPriceFunc(){
        if(this.props.cart.items.length === 0) return 0;
      
        var tp = 0;
        for(var i =0; i< this.props.cart.items.length; i++)
        {
          tp += this.props.cart.items[i].units * this.props.cart.items[i].price;
        }
      
        return tp;
      }

    render(){
        const width50 = {width : '50%'};
        const width10 = {width : '10%'};
        const width20 = {width : '20%'};
        const width8 = {width : '1%'};
        const width22 = {width : '22%'};
        const productStyle = { height : '50px', width : '50px'};   
        const price = { textAlign : 'right', marginTop : '15px'};
        const Body = this.props.cart.items.map((p, i) => (
        <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-sm-2 hidden-xs"><img src={p.img} alt="..." class="img-responsive" style={productStyle}/></div>
                    <div class="col-sm-10">
                        <h5 class="nomargin">{p.name}</h5>
                    </div>
                </div>
            </td>
            <td data-th="Price">&#8377;{p.price}</td>
            <td data-th="Quantity">
                <input type="number" class="form-control text-center" value={p.units} onChange={(e) => this.props.modifyProductQuantityInCart(this.props.cart, p, e.target.value)} />
            </td>
            <td data-th="Subtotal" class="text-center"><strong>&#8377;{p.units * p.price}</strong></td>  
            <td class="actions" data-th="">
                <button class="btn btn-danger btn-sm" onClick={() => this.props.removeCartProduct(this.props.cart, p)}><i class="fa fa-trash-o"></i></button>								
            </td>  
        </tr>));

        const Cart = (
                <div>
                    <div className="row">                    
                        <div className="col-sm-6"><h5>{this.props.cart.items.length} Items in cart</h5></div>
                        <div className="col-sm-6" style={price}><strong class="badge badge-warning">Total : &#8377;{this.totalPriceFunc()}</strong></div>
                    </div>
                        
                    <table id="cart" class="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th style={width50}>Product</th>
                                <th style={width10}>Price</th>
                                <th style={width20}>Quantity</th>
                                <th style={width22} class="text-center">Subtotal</th>
                                <th style={width8}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Body}
                        </tbody>
                        {/* <tfoot>
                            <tr>
                                <td colspan="2" class="hidden-xs"></td>
                                <td class="hidden-xs text-center"><strong>Total &#8377;{this.totalPriceFunc()}</strong></td>
                                <td><button href="#" class="btn btn-success btn-block">Checkout</button></td>
                                
                            </tr>
                        </tfoot> */}
                    </table>
                </div>
        );

        const EmptyCart = (
            <div class="alert alert-success">
            <strong>Cart is empty.</strong>
          </div>
        );

        return(
            <div>
                {this.props.cart.items.length > 0 ? Cart : EmptyCart}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    cart : state.cart.cart
});

export default connect(mapStateToProps, {removeCartProduct, modifyProductQuantityInCart})(Cart);