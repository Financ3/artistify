import './Admin.css';
import { connect } from 'react-redux';
import AdminLogin from './AdminLogin';
import AdminLoggedIn from './AdminLoggedIn';


function Admin(props) {
  console.log(props.isAdmin);
  return (
    <div className="admin">
      <div className="view-header">Admin View:</div>
        {props.isAdmin?<AdminLoggedIn/>:<AdminLogin/>}
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    isAdmin: reduxState.isAdmin,
    artworksArray: reduxState.artworksArray,
    asyncStatus: reduxState.asyncStatus
  }
}


export default connect(mapStateToProps)(Admin);
