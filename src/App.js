import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import routes from './routes';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Component } from 'react';
import { getArtworkData, setCartData } from './redux/reducers/artworkReducer';
import { connect } from 'react-redux';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;


class App extends Component {

  componentDidMount() {
    //get initial set of artwork data from the data base
    this.props.getArtworkData();

    //If the local storage cart doesnt exist, then set it to the redux store cart to ensure they are always the same.
    if(!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(this.props.shoppingCart))
    }
    //If the local storage cart DOES exist, then set the redux store equal to it.
    else {
      this.props.setCartData(JSON.parse(localStorage.getItem('cart')));
    }
  }

  
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="menu-flex-container">
            <Menu />
            <div className="routes">
              {routes}
            </div>
          </div>
          <Subscribe />
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart,
  }
}

export default connect(mapStateToProps,{getArtworkData, setCartData})(App);