import './CartButtons.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from './../../redux/reducers/artworkReducer';



class CartButtons extends Component {
  constructor() {
    super();
    this.state = {
      cartError: false,
      cartItem: {
        //be sure to set this artwork ID before you make send the new cart object off
        artworkId: null,
        size: "small",
        price: null,
        quantity: 0,
        totalAmount: 0,
        title: '',
        description: '',
        media: ''
      }
    }
  }

  componentDidUpdate() {
    //check that this isn't the first mounting, when the artwork is not yet returned from the API
    console.log(this.props.artwork);
    if (this.props.artwork) {
      //update the ID if the URL has a new query string parameter
      if (this.props.artwork.id !== this.state.cartItem.artworkId) {
        this.setState({
          ...this.state,
          cartItem: {
            ...this.state.cartItem,
            artworkId: this.props.artwork.id,
            title: this.props.artwork.title,
            description: this.props.artwork.description,
            media: this.props.artwork.media
          }
        });
      }
      //update the price if is null - aka. set the default price.
      if (!this.state.cartItem.price) {
        this.setState({
          ...this.state,
          cartItem: {
            ...this.state.cartItem,
            price: this.props.artwork.smallprice
          }
        });
      }

    }     
  }

  setCartSize = (ev) => {
    let size = ev.target.value;
    let price = 0;
    if(ev.target.value==="small") {
      price = this.props.artwork.smallprice;
    } else if (ev.target.value==="medium") {
      price = this.props.artwork.medprice;
    } else if (ev.target.value==="large") {
      price = this.props.artwork.largeprice;
    }

    let totalPrice = price * this.state.cartItem.quantity;

    this.setState({
      ...this.state,
      cartItem: {
        ...this.state.cartItem,
        size: size,
        price: price,
        totalAmount: totalPrice
      }
    });
  }

  incrementCartQuantity = () => {
    let quantity = this.state.cartItem.quantity + 1;
    let price = this.state.cartItem.price * quantity;

    this.setState({
      ...this.state,
      cartItem: {
        ...this.state.cartItem,
        quantity: quantity,
        totalAmount: price
      }
    });
  }

  decrementCartQuantity = () => {
    if (this.state.cartItem.quantity===0) return;
    let quantity = this.state.cartItem.quantity - 1;
    let price = this.state.cartItem.price * quantity;

    this.setState({
      ...this.state,
      cartItem: {
        ...this.state.cartItem,
        quantity: quantity,
        totalAmount: price
      }
    });
  }

  addToCart = () => {
    //update the redux store with the new cart item.
    //only make the update if the quantity is above 0. We don't want to add $0 items to the cart.
    if (this.state.cartItem.quantity!==0) {
      //add the new cart object to the redux store
      this.props.addToCart(this.state.cartItem);
      //add the new cart object to the local storage as well. 
      //First we get the existing local storage object and convert it from its string format to object format.
      let currentStorage = JSON.parse(localStorage.getItem('cart'));
      //next we add the new cart item to the existing storage array.
      currentStorage.push(this.state.cartItem);
      //finally add the updated storage array back to the local storage
      localStorage.setItem('cart', JSON.stringify(currentStorage));

      //update the cartError message boolean so that the error message is hidden, just in case it was already showing.
      this.setState({
        ...this.state,
        cartError: false
      });
    } 
    //If its a 0 quantity item then just change the cart error boolean to true, so that the error message displays.
    else {
      this.setState({
        ...this.state,
        cartError: true
      });
    }
    
  }
  

  render() {
    return (
      <div className="small-art-piece-purchase-details">
        <div className="cart-buttons-flex-container">
          <div className="small-art-size-dropdown-div">
            <p>Size:</p> 
    
            <select name="size" id="size" onChange={ev => this.setCartSize(ev)}>
              <option value="small">Small - ${this.props.artwork?.smallprice}</option>
              <option value="medium">Medium - ${this.props.artwork?.medprice}</option>
              <option value="large">Large - ${this.props.artwork?.largeprice}</option>
            </select>
    
          </div>
          <div className="cart-buttons-quantity-div">
            <p>Quantity:</p>
            <input className="quantity" value={this.state.cartItem.quantity} readOnly></input>
    
            <button id="increment-quantity" onClick={this.incrementCartQuantity}>&#9650;</button>
    
            <button id="decrement-quantity" onClick={this.decrementCartQuantity}>&#9660;</button>
    
          </div>
        </div>
          <div className="small-art-summary-div">
              <p>Total Item Cost: ${this.state.cartItem.totalAmount}</p>
          </div>
          <button className="add-to-cart" onClick={this.addToCart}>Add to Cart</button>
          {(this.state.cartError)?<div className="cart-message">Cannot add to cart with quantity of "0".</div>:null}
      </div>
    )
  }

}

  
export default connect(null,{addToCart})(CartButtons);