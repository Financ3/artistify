import './Menu.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Menu(props) {
    return (
      props.menuDisplay?
        <nav className="menu">
        <div className="menu-option">
          <Link to="/">
            <h2>About the Artist</h2>
          </Link>
        </div>
        <div className="menu-option">
          <Link to="/resume">
            <h2>CV/Resume</h2>
          </Link>
        </div>
        <div className="menu-option">
          <Link to="/artworks">
            <h2>Artworks</h2>
          </Link>
        </div>
        <div className="menu-option">
          <Link to="/contact">
            <h2>Contact/Commissions</h2>
          </Link>
        </div>
        <div className="menu-option">
          <Link to="/newsletter">
            <h2>Newsletter</h2>
          </Link>
        </div>
      </nav>:
      null
    );
  }

  function mapStateToProps(state) {
    return {
      menuDisplay: state.menuDisplay
    }
  }
  
  export default connect(mapStateToProps)(Menu);