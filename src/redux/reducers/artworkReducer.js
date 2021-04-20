import axios from 'axios';

//initial state
const initialState = {
    isAdmin: false,
    artworksArray: [],
    shoppingCart: [],
    asyncStatus: "pending",
    menuDisplay: true
}

//action types]
const GET_ARTWORK_DATA = 'GET_ARTWORK_DATA';
const ADD_TO_CART = 'ADD_TO_CART';
const SET_CART_DATA = 'SET_CART_DATA';
const TOGGLE_MENU = 'TOGGLE_MENU';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

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
        default: 
            return state;
    }
}