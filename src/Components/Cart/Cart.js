import './Cart.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import CartSmallArt from './../Cart/cartSmallArt';
import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {setCartData} from './../../redux/reducers/artworkReducer';

 function Cart(props) {
  const [grandTotal, setGrandTotal] = useState(0);
  const [failedCheckout, setFailedCheckout] = useState(false);

  const clearCart = () => {
    props.setCartData([]);
    localStorage.setItem('cart', []);
  }

  useEffect(()=>{
    if (props.shoppingCart[0]){
      let total = props.shoppingCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.totalAmount;
    }, 0);
    setGrandTotal(total); 
    }
  },[props])

  return (
    <div className="Cart">
          <h2 className="view-header">Shopping Cart</h2>
          <div className="checkout-div">
              <p>{props.shoppingCart.length} Item(s) in Cart</p>
              <p>Grand Total: ${grandTotal}</p>
                <StripeCheckout 
                stripeKey='pk_test_51IiKbGHZCHPRwIYt0oIuy33H56cYx6nJGxN3ub9WTgrStzjp5VBlkGAyKyQsiQp9bLA6bPMAUL5d4FWPjY73bihz0083c07Ni1'
                token={ async (tok) => 
                  {
                    setFailedCheckout(false);
                    try {
                      await axios.post('/api/checkout', {
                        token: tok,
                        cart: props.shoppingCart,
                        totalCharge: grandTotal
                      }); 
                      clearCart();
                      props.history.push("/confirmation");
                    }
                    catch (err) {
                      console.log(err);
                      setFailedCheckout(true);
                    }
                    
                  }
                }
                billingAddress
                shippingAddress
                amount={grandTotal*100}
                name=''
                />
                {failedCheckout?<div className="failed-checkout-message">There was a problem processing your payment. Please try again. If you continue to have problems please <Link to="/contact">contact the artist</Link> to resolve.</div>:null}

              {/* <Link to="/submit-payment"><button id="checkout-button">Checkout</button></Link> */}
          </div>
          <div className="cart-flex-container">
            {props.shoppingCart.map((elem, index) => {
              return <CartSmallArt cartItem={elem} key={index}/>;
            })}
          </div>
    </div>
  )
}

  function mapStateToProps(state) {
    return {
      shoppingCart: state.shoppingCart,
      artworksArray: state.artworksArray
    }
  }
  
  export default connect(mapStateToProps,{setCartData})(Cart);