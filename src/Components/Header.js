import "./Header.css"
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleMenu} from './../redux/reducers/artworkReducer';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from "react";

function Header(props) {
  const isBigScreen = useMediaQuery({
    query: '(min-width: 1200px)'
  });

  useEffect(() => {
    if(isBigScreen && !props.menuDisplay) {
      props.toggleMenu();
    }
  }, [isBigScreen]);

  let adminLogout;
  if (props.isAdmin) {
    adminLogout=<div><Link to="/admin"><span>Admin</span></Link></div>
  } else {
    adminLogout = null;
  }
  
  return (
    <header className="header">
      <div className="site-title">
          <h1>Nathan Francis</h1>
          <p>Photographer / Sculptor<br/>{adminLogout}</p>
      </div>
      <div className="cart-icon">
          <Link to="/cart">
          <svg className="cart-icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
          <div className="cart-counter">{props.shoppingCart.length}</div>
          </Link>
      </div>
      <div className="menu-icon" onClick={props.toggleMenu}>
      <svg className="menu-icon-svg" viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
      </svg>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin,
    shoppingCart: state.shoppingCart,
    menuDisplay: state.menuDisplay
  }
}

export default connect(mapStateToProps, {toggleMenu})(Header);