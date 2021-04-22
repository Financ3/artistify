import './cartSmallArt.css';
import {connect} from 'react-redux';
import {removeFromCart} from './../../redux/reducers/artworkReducer';
import { useEffect } from 'react';

function CartSmallArt(props) {
    // useEffect(() => {
    //   console.log(props.cartItem);
    // });
    /*  Example Object for a cart item
    {
        artworkId: 1,
        size: small,
        price: 5,
        quantity: 3,
        totalAmount: 15
        title: text,
        description: text,
        media: url
    }
    */

  const removeFromCart = () => {
    //create the new shopping cart object for local storage
    let shoppingCart = [...props.shoppingCart];
    let cartItem = props.cartItem;
    let indexToRemove = shoppingCart.indexOf(cartItem);
    shoppingCart.splice(indexToRemove, 1);

    //remove the item from the redux cart
    props.removeFromCart(props.cartItem);

    //remove the item from the local storage cart
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }

  return (
    <div className="cart-small-art">
      <h2>{props.cartItem.title}</h2>

      <div className="cart-small-art-flex-container">
        <div className="cart-small-art-img-container">
            <img alt="art piece" src={props.cartItem.media}></img>
        </div>
        
        <div className="item-cost-details">
          <div className="cart-small-art-item-flex-container">
            <div className="cart-small-art-item-details">
              <p><b>Size:</b> <span className="span-right-align">{props.cartItem.size}</span></p>
              <p><b>Quantity:</b> <span className="span-right-align">{props.cartItem.quantity}</span></p>
              <p><b>Price:</b> <span className="span-right-align">${props.cartItem.price}</span></p>
              <hr></hr>
              <p><b>Total Item Cost:</b> <span className="span-right-align">${props.cartItem.totalAmount}</span></p>
            </div>
          </div>
          <button className="remove-from-cart" onClick={removeFromCart}>Remove From Cart</button>
        </div>  
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  }
}
  
export default connect(mapStateToProps,{removeFromCart})(CartSmallArt);