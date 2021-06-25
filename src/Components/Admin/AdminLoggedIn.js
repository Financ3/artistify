import { connect } from 'react-redux';
import { logout } from './../../redux/reducers/artworkReducer';

function AdminLoggedIn(props) {
    return (
        <div className="admin-logged-in">
            <p>
            You are logged in. You will now be able to:
            </p>
            <ul>
                <li>Delete posts from the Artworks page</li>
                <li>Add new posts to the Artworks page</li>
                <li>Edit existing posts on the Artworks page</li>
            </ul>
            <span onClick={props.logout}>Logout</span>
        </div>
    )
}

export default connect(null, {logout})(AdminLoggedIn);