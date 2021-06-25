import './SmallArt.css';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

function SmallArt(props) {
  return (
    <div className="small-art">
        <h2>{props.artwork.title}
        {this.props.isAdmin?
          <Link to="/edit-piece"><span className="edit-art-button">Edit</span></Link>:
            null}
        </h2>
        <div className="small-art-flex-container">
          <div className="small-art-img-container">
            <Link to={{
              pathname: `/single-art/${props.artwork.id}`,
              state: {
                source: props.source
              }
            }}>
              <img alt="art piece" src={props.artwork.media}></img>
            </Link>
          </div>
          <div className="small-art-p-button-container">
            <p>{props.artwork.description}</p>
            
          </div>
        </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin,
  }
}
  
export default connect(mapStateToProps)(SmallArt);