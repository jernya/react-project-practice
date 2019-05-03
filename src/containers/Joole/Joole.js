import React, { Component } from 'react';
import {Route, Switch,Redirect,withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import SelectPlatform from './Auth/Select-Platform/Select-Platform';
import Product from './Product/Product';
import ProductDetails from './Product/Product-Details/Prodct-Details';
import ProductCompare from './Product/Product-Compare/Product-Compare';
import './Joole.css';

class Joole extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route path="/login" exact component = {Login} />
                <Route path="/signup" exact component = {Signup} />
                <Route path='/selectPlatform' exact component = {SelectPlatform} />
                <Route path='/product' exact component ={Product} />
                <Route path='/product/:id' exact component={ProductDetails} />
                <Route path='/compare' component={ProductCompare} />
                <Redirect from='/' to='/login'/>
                
            </Switch>
        </div>

    );
  }
}
export default Joole;
// export default withRouter(Joole);

