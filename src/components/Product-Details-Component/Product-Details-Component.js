import React from 'react';
import './Product-Details-Component.css'

const ProductDetailsComponent = (props) => {
    let detailList =props.Details.map((detail, index) =>{
        return  <div className="Detail-List" key={detail+index}>
            {detail}
        </div>
        })
    return (
        <div className="Product-Details-Component">
            <div className="Product-Details-Component-Title"> Product Details</div>
            <div className="Details-Header">SERIES INFORMATION</div>
            {detailList}
        </div>
    )
}

export default ProductDetailsComponent;