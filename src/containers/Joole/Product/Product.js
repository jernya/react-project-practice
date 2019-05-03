import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from './Header/Header';
import './Product.css';
import ProductSearchResult from './Product-SearchResult/Product-SearchResult';
import ProductDetails from './Product-Details/Prodct-Details';


class Product extends Component{
    componentDidMount(){
        // console.log("in product.js!!!!!")
        // console.log(this.props);
        // console.log("88888888")
    }
    render(){
        return (
            <div className="Product">
                <div className="Product-Border">
                    <Header />
                    <ProductSearchResult urlInfo={this.props}/>
                </div>
               
                
            </div>
        )
    }
}

// export default Product;
// export default withRouter(Product);
const mapStateToProps = state => {
    return {

    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    };
  };
  
  export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Product ) );
