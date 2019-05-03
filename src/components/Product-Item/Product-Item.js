import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';
import AddtoBtn from '../../components/AddtoBtn/AddtoBtn';
import './Product-Item.css';

class ProductItem extends Component{
    state = {
        toCompare:false
    }
    addToCompare=()=>{
        this.setState({
            toCompare:true
        })
    }
    render(){
        let redirect = null;
        if(this.state.toCompare){
            redirect=<Redirect to="/compare" />
        }
        return (
            <div className="col-md-3 col-sm-6 List-Item" onClick={this.props.clicked}>
                {redirect}
                <div className = "thumbnail">
                    <div className="Item-Verify">Verified {this.props.Certifications}</div>
                    <img src={require('../../assets/Image/fan.png')} className="Item-Pic"alt=""/>
                    <div className="Item-Brand">{this.props.Brand}</div>
                    <div className="Item-Series">{this.props.Series}</div>
                    <div className="Item-Model">{this.props.Model}</div>
                    <div className="Item-Tech">
                        <div >{this.props.Airflow} CFM</div>
                        <div>{this.props.MaxPower} W at max power</div>
                        <div>{this.props.MaxSpeed} dBA at max speed</div>
                        <div>{this.props.SweepDiameter}" fan sweep diameter</div>
                    </div>
                    <div className="Item-Spec">
                        <div> Past specification:</div>
                        <div>{this.props.PastSpecFirm} firm / {this.props.PastSpecGlobal} global</div>
                    </div>
                    <div className="Item-Bottom">
                        <div className="Item-Compare">
                            <input type="checkbox" className="Compare-Input"/>
                            <div>Compare</div>
                        </div>
                        
                        <AddtoBtn  onClick={this.addToCompare}/>
                        
                        
                    </div>
                </div>
                
            </div>
                    
        )
    }
}
// const ProductItem = (props) =>{
    
// }


export default ProductItem;