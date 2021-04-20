import './SingleArt.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import CartButtons from './CartButtons';

function SingleArt(props) {
  const [singleArt, setSingleArt] = useState({});
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let artwork = props.artworksArray.find(elem => +elem.id===+props.match.params.id);
    setSingleArt(artwork);

    if (props.shoppingCart[0]){
      let total = props.shoppingCart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.totalAmount;
      }, 0);
    setGrandTotal(total); 
    }
  }, [props]);

  let display = 
    <div className="single-art">
      {(props.location.state && props.location.state.source==="about")?
        <h2 className="view-header"><Link to="/">&#12296;Back to About:</Link></h2>:
          (props.location.state && props.location.state.source==="artworks")?
            <h2 className="view-header"><Link to="/artworks">&#12296;Back to Artworks:</Link></h2>:
              <h2 className="view-header"><Link to="/artworks">&#12296;Back to Artworks:</Link></h2>}
      
      <h2>{singleArt?.title}</h2>
      <div className="single-art-img-container">
          <img alt="art piece" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/79103947_2645076688904747_4208698857770450944_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vMPd9mGR1OUAX-iE8JZ&_nc_ht=scontent-dfw5-1.xx&oh=93aa1364d1ebc0293ba951f51740bd9f&oe=609B7822"></img>
      </div>
      <p>{singleArt?.description}</p>
      <CartButtons artwork={singleArt} shoppingCart={props.shoppingCart}/>
      <div className="single-art-view-cart-div">
          <p>{props.shoppingCart?.length} Item(s) in Cart</p>
          <p>Total Cart Cost: ${grandTotal}</p>
          <Link to="/cart"><button id="view-cart">View Cart</button></Link>
      </div>
    </div>

  return (
    <div>
      {props.asyncStatus==="pending"?"Loading...":
        props.asyncStatus==="rejected"?"Failed to retrieve data. Contact the artist.":
          props.asyncStatus==="fulfilled"?display:null}
    </div>
  )
}
  
function mapStateToProps(state) {
  return {
    artworksArray: state.artworksArray,
    shoppingCart: state.shoppingCart,
    asyncStatus: state.asyncStatus
  }
}

export default connect(mapStateToProps)(SingleArt);