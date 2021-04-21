import './SmallArt.css';
import { Link } from "react-router-dom";

function SmallArt(props) {
  return (
    <div className="small-art">
        <h2>{props.artwork.title}</h2>
        <div className="small-art-flex-container">
          <div className="small-art-img-container">
            <Link to={{
              pathname: `/single-art/${props.artwork.id}`,
              state: {
                source: props.source
              }
            }}>
              <img alt="art piece" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/79103947_2645076688904747_4208698857770450944_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vMPd9mGR1OUAX-iE8JZ&_nc_ht=scontent-dfw5-1.xx&oh=93aa1364d1ebc0293ba951f51740bd9f&oe=609B7822"></img>
            </Link>
          </div>
          <div className="small-art-p-button-container">
            <p>{props.artwork.description}</p>
            
          </div>
        </div>
        
        
        
        
    </div>
  );
}
  
export default SmallArt;