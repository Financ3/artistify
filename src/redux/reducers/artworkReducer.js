import axios from 'axios';

//initial state
const initialState = {
    isAdmin: false,
    artworksArray: [],
    shoppingCart: [],
    asyncStatus: "fulfilled",
    menuDisplay: true
}

//action types
const GET_ARTWORK_DATA = 'GET_ARTWORK_DATA';
const ADD_TO_CART = 'ADD_TO_CART';
const SET_CART_DATA = 'SET_CART_DATA';
const TOGGLE_MENU = 'TOGGLE_MENU';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const LOGIN = 'LOGIN';
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
const LOGOUT = 'LOGOUT';
const ADD_PIECE = 'ADD_PIECE';

//action creators (functions)
export function getArtworkData() {
    return {
        type: GET_ARTWORK_DATA,
        payload: axios.get('/api/artworks')
    }
}


export function addToCart(cartItem) {
//adds a shopping cart entry to the cart. Shopping cart entries are objects. Example below the function.
    return {
        type: ADD_TO_CART,
        payload: cartItem
    }
}
/*  Example Object
    {
        artworkId: 1,
        size: small,
        price: 5,
        quantity: 3,
        totalAmount: 15
        title: text,
        description: text,
        image: url
    }
*/

export function setCartData(cart) {
    return {
        type: SET_CART_DATA,
        payload: cart
    }
}

export function toggleMenu() {
    return {
        type: TOGGLE_MENU
    }
}

export function removeFromCart(cartItem) {
    return {
        type: REMOVE_FROM_CART,
        payload: cartItem
    }
}

export function login(email, password) {
    return {
        type: LOGIN,
        payload: axios.post('/auth/login', {email, password})
    }
}

export function setLoginStatus() {
    return {
        type: SET_LOGIN_STATUS,
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: axios.post('/auth/logout')
    }
}

export function addPiece(newPiece) {
    return{
        type: ADD_PIECE,
        payload: newPiece
    }
}


//artwork reducer

export default function artworkReducer(state=initialState, actionObj) {
    switch(actionObj.type) {
        case GET_ARTWORK_DATA  + '_FULFILLED':
            return {
                ...state,
                artworksArray: actionObj.payload.data,
                asyncStatus: "fulfilled"
            };
        case GET_ARTWORK_DATA  + '_PENDING':
            return {
                ...state,
                asyncStatus: "pending"
            }
        case GET_ARTWORK_DATA  + '_REJECTED':
            return {
                ...state,
                asyncStatus: "rejected"
            };
        case ADD_TO_CART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, actionObj.payload]
            }
        case SET_CART_DATA:
            return {
                ...state,
                shoppingCart: actionObj.payload
            }
        case TOGGLE_MENU:
            return {
                ...state,
                menuDisplay: !state.menuDisplay
            }
        case REMOVE_FROM_CART:
            let shoppingCart = [...state.shoppingCart];
            let cartItem = actionObj.payload;
            let indexToRemove = shoppingCart.indexOf(cartItem);
            shoppingCart.splice(indexToRemove, 1);
            return {
                ...state,
                shoppingCart: shoppingCart
            }
        case LOGIN + '_FULFILLED':
            localStorage.setItem('isAdmin', JSON.stringify(true));
            return {
                ...state,
                isAdmin: true,
                asyncStatus: 'fulfilled'
            }
        case LOGIN + '_PENDING':
            return {
                ...state,
                isAdmin: false,
                asyncStatus: 'pending'
            }
        case LOGIN + '_REJECTED':
            return {
                ...state,
                isAdmin: false,
                asyncStatus: 'failed'
            }
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isAdmin: true,
            }
        case LOGOUT + '_PENDING':
            return {
                ...state,
                asyncStatus: 'pending'
            }
        case LOGOUT + '_FULFILLED':
            localStorage.setItem('isAdmin', JSON.stringify(false));
            return {
                ...state,
                isAdmin: false,
                asyncStatus: 'fulfilled'
            }
        case LOGOUT + '_REJECTED':
            return {
                ...state,
                asyncStatus: 'rejeced'
            }
        case ADD_PIECE:
            //add the media to the S3 bucket
            const {media} = actionObj.payload;
            axios.post('/api/addMedia',{})
            //add the new piece to the Database
            axios.post('/api/artworks', actionObj.payload);
            //add the new piece to the redux state
            return {
                ...state,
                artworksArray: state.artworksArray.push(actionObj.payload)
            }
        default: 
            return state;
    }
}