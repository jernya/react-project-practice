import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import CompareItem from '../../../../components/Compare-Item/Compare-Item';
import CompareCatalog from '../../../../components/Compare-Catalog/Compare-Catalog';
import './Product-Compare.css';

class ProductCompare extends Component {
    state = {
        product:this.props.product
    }
   
    render(){
        let compareItem = this.state.product.map((product,index) =>{
            return <div className="Product-Compare-Item">
                    <CompareItem Certifications={product.Certifications}
                    Brand = {product.Manufacturer} Series={product.Series}
                    Model={product.Model} Airflow={product.Technical.Airflow}
                    MaxPower={product.Technical.Power.Max} MaxSpeed={product.Technical.Speed.Max}
                    SweepDiameter={product.Technical.SweepDiameter}
                    PastSpecFirm={product.PastSpec.Firm} PastSpecGlobal={product.PastSpec.Global}
                    key = {product.Model}
                    />
            </div>
            
        })


        return(
            <div className="Product-Compare">
                <div className="Compare-Border">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    <Header />
                    <div className="Product-Compare-Link">
                        <a href="/selectPlatform" className="Link-Start">Mechanical</a>
                        <span> > </span>
                        <a href="/product"> HVAC Fans</a>
                        <span> > </span>
                        <span> Compare</span>
                    </div>
                    <div className="Compare-List">
                        <CompareCatalog />

                        <div className=" Compare-Right-Container">
                            <div className="Compare-Right-Row">
                                {compareItem}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default ProductDetails;
const mapStoreToProps = state =>{
    return{
        product:state.productReducer.product
    }
}

const mapDispatchToProps = dispatch =>{
    return {

    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ProductCompare);