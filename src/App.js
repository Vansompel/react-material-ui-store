import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'





class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
