import React , {Component} from 'react';
import Sidebar from './Sidebar/Sidebar';
import ProductList from './Product-List/Product-List';
import './Product-SearchResult.css';

class ProductSearchResult extends Component {
   
    render(){
        return(
            <div className="Prodct-Content">
                <div className="Product-Sidebar">
                    <Sidebar />
                </div>
                <div className="Product-ProductList">
                    <ProductList urlInfo={this.props.urlInfo}/>
                </div>
            </div>
        )
    }
}

export default ProductSearchResult;