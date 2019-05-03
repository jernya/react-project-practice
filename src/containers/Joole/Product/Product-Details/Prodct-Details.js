import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import AddtoBtn from '../../../../components/AddtoBtn/AddtoBtn';
import ProductSummary from '../../../../components/Product-Summary/Product-Summary';
import ProductDetailsComponent from '../../../../components/Product-Details-Component/Product-Details-Component';
import ProductDocumentation from '../../../../components/Product-Documentation/Product-Documentation';
import ProductContact from '../../../../components/Product-Contact/Product-Contact';

import * as actions from '../../../../store/actions/index';
import './Product-Details.css';
class ProductDetails extends Component {
    state = {
        // product:this.props.product[0]
        product:this.props.detail
    }
    render(){
        return(
            <div className="Product-Details">
                <div className="Details-Border">
                    <Header />
                    <div className="Product-Details-Link">
                        <a href="/selectPlatform" className="Link-Start">Mechanical</a>
                        <span> > </span>
                        <a href="/product"> HVAC Fans</a>
                        <span> > </span>
                        <span> S3150-S0-BS-78</span>
                    </div>
                    <div className="Details-Title">
                        <img src={require('../../../../assets/Image/fan.png')} className="Details-Image"  alt="Detail-Image"/>    
                        <div className="Title-Name" > 
                            Brand / Series / Model111
                        </div>
                        <div className="Title-Desc">
                            Past specifications: 0 firm / 1297 global
                        </div>
                        <span className="Details-Title-Btn">   
                            <AddtoBtn />
                        </span>
                    </div>
                    <div className="Details-Type">
                        <div className="Type-Header">
                            <a className="Type-Header-Name" href="#ProductSummary">Product Summary</a>
                            <a className="Type-Header-Name" href="#ProductDetails">Prodct Details</a>
                            <a className="Type-Header-Name" href="#ProductDocumentation">Product Documentation</a>
                            <a className="Type-Header-Name" href="#ProductContact">Contact</a>
                        </div>
                        
                    </div>
                    <div className="Details-Content">
                        <div  id="ProductSummary">
                            <ProductSummary Brand={this.state.product.Manufacturer} Series={this.state.product.Series}
                            Model={this.state.product.Model} Year={this.state.product.Year}
                            Airflow={this.state.product.Technical.Airflow} 
                            MaxPower={this.state.product.Technical.Power.Max}
                            MinPower={this.state.product.Technical.Power.Min}
                            MaxSpeed={this.state.product.Technical.Speed.Max}
                            MinSpeed={this.state.product.Technical.Speed.Min} 
                            Diameter={this.state.product.Technical.SweepDiameter} />
                        </div>
                      

                        <div id="ProductDetails">
                            <ProductDetailsComponent  Details={this.state.product.Details}/>
                        </div>
                        <div id="ProductDocumentation">
                            <ProductDocumentation/>
                        </div>
                        
                        <div id="ProductContact">
                            <ProductContact SalesName={this.state.product.Contact.Sales.Name}
                            SalesPhone={this.state.product.Contact.Sales.Phone}
                            SalesEmail={this.state.product.Contact.Sales.Email}
                            SalesWeb={this.state.product.Contact.Sales.Web}
                            
                            ManuDepartment={this.state.product.Contact.Manufacturer.Department}
                            ManuPhone={this.state.product.Contact.Manufacturer.Phone}
                            ManuEmail={this.state.product.Contact.Manufacturer.Email}
                            ManuWeb={this.state.product.Contact.Manufacturer.Web}/>
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
        product:state.productReducer.product,
        detail:state.productReducer.detailedProduct
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        

    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ProductDetails);