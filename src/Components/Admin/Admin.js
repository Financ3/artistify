import './Admin.css';
import { connect } from 'react-redux';

function Admin() {
  return (
    <div className="admin">
      <div className="view-header">Admin Login:</div>
      <div className="admin-credentials">
        <div className="admin-credentials-username">
          <div className="admin-credentials-username-label">Username:</div>
          <div className="admin-credentials-username-input">
            <input></input>
          </div>
        </div>

        <div className="admin-credentials-password">
          <div className="admin-credentials-password-label">Password:</div>
          <div className="admin-credentials-password-input">
            <input></input>
          </div>
        </div>

        <div className="admin-credentials-error-message">
          <p>Incorrect username/password. Please try again.</p>
        </div>

      </div>
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
