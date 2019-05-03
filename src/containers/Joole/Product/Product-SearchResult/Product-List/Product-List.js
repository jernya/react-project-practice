import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../../../../components/Product-Item/Product-Item';
import * as actions from '../../../../../store/actions/index';
import './Product-List.css';

class ProductList extends Component{
    state ={
        products : this.props.product
    }
    componentDidMount(){
        console.log("in productList!!!!!");
        console.log(this.props.urlInfo);
    }
    ItemSelectedHandler = (Model,product) => {
        this.props.urlInfo.history.push('/product/' + Model);
        
        this.props.onCurrentProductGot(product);
    }
    render(){
        let items = this.state.products.map((product, index) =>{
            return <ProductItem  Certifications={product.Certifications}
             Brand = {product.Manufacturer} Series={product.Series}
              Model={product.Model} Airflow={product.Technical.Airflow}
              MaxPower={product.Technical.Power.Max} MaxSpeed={product.Technical.Speed.Max}
              SweepDiameter={product.Technical.SweepDiameter}
              PastSpecFirm={product.PastSpec.Firm} PastSpecGlobal={product.PastSpec.Global}
              key = {product.Model}
              clicked={()=>this.ItemSelectedHandler(product.Model,product)}
            />
            })
       
        return(
            <div className="Product-List">
                <div className="Product-List-Link">
                    <a href="/selectPlatform">Mechanical</a>
                    <span> > </span>
                    <span> HVAC Fans</span>
                    <span> > </span>
                    <a href="/compare">Compare</a>
                </div>
              
                <div className="Product-List-container">
                    <div className="row">
                        {items}         
                    </div>
                    
                </div>
            </div>
        )

    }
}

const mapStoreToProps = state =>{
    return{
        product:state.productReducer.product,
        detail:state.productReducer.detail
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onCurrentProductGot:(product) => dispatch(actions.getCurrentProduct(product))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ProductList);