import './Confirmation.css';
import {Link} from 'react-router-dom'

function Confirmation() {
    return (
      <div className="confirmation">
        <h2 className="view-header">Confirmation:</h2>
        <p>Your payment was processed. Thanks for supporting an artist!<br/><br/>You should receive an email confirmation for your order. If you do not receive an email please <Link to="/contact">contact the artist.</Link></p>
      </div>
    );
  }
  
  export default Confirmation;