import { connect } from 'react-redux';
import { login } from './../../redux/reducers/artworkReducer';
import {useState} from 'react';

function AdminLogin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failedLogin, setFailedLogin] = useState(false);

    function componentLogin() {
        props.login(email, password);
        if (props.isAdmin) {
            setFailedLogin(false);
        } else {
            setFailedLogin(true);
        }
    }

    return (
        <div className="admin-login">
        <div className="admin-credentials">
            <div className="admin-credentials-username">
            <div className="admin-credentials-username-label">Username:</div>
            <div className="admin-credentials-username-input">
                <input onChange={ev => setEmail(ev.target.value)}></input>
            </div>
            </div>

            <div className="admin-credentials-password">
            <div className="admin-credent ials-password-label">Password:</div>
            <div className="admin-credentials-password-input">
                <input  onChange={ev => setPassword(ev.target.value)}></input>
            </div>
            </div>

            {failedLogin?
                <div className="admin-credentials-error-message">
                <p>Incorrect username/password. Please try again.</p>
                </div>:
                null}

            <div className="admin-credentials-login">
            <div className="admin-credentials-login-button" onClick={componentLogin}>Login</div>
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


export default connect(mapStateToProps, {login})(AdminLogin);
