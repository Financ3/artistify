import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
      <div className="footer">
        <p>
          <Link to="/artworks">Gallery</Link><span> - </span>
          <Link to="/contact">Commissions</Link><span> - </span>
          <Link to="/artworks">Buy Prints</Link></p>
      </div>
    );
  }
  
  export default Footer;