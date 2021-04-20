import './cartSmallArt.css';
import {connect} from 'react-redux';
import {removeFromCart} from './../../redux/reducers/artworkReducer';

function CartSmallArt(props) {
    /*  Example Object for a cart item
    {
        artworkId: 1,
        size: small,
        price: 5,
        quantity: 3,
        totalAmount: 15
        title: text,
        description: text,
        image: url
    }
    */

  // const removeFromCart = () => {
  //   //remove the item from the redux cart
  //   props.removeFromCart(props.cartItem);

  //   //remove the item from the local storage cart
  //   console.log(props.shoppingCart);
  //   // localStorage.setItem('cart', JSON.stringify(props.shoppingCart));
  // }

  return (
    <div className="cart-small-art">
      <h2>{props.cartItem.title}</h2>

      <div className="cart-small-art-flex-container">
        <div className="cart-small-art-img-container">
            <img alt="art piece" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/79103947_2645076688904747_4208698857770450944_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vMPd9mGR1OUAX-iE8JZ&_nc_ht=scontent-dfw5-1.xx&oh=93aa1364d1ebc0293ba951f51740bd9f&oe=609B7822"></img>
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
          <button>Remove From Cart</button>
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