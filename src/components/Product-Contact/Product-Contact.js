import React from 'react';
import './Product-Contact.css';

const ProductContact = (props) =>{
    return(
        <div className="Product-Contact">
            <div className="Product-Contact-Title">Contact</div>
            <div className="Product-Contact-List">
                <div className="Contact-Left">
                    <div className="Contact-Header">SALES REPRESENTATIVE</div>
                    <div className="Contact-Content">
                        <div className="Description-Left">
                            <div>Name</div>
                            <div>Phone</div>
                            <div>Email</div>
                            <div>Web</div>
                        </div>
                        <div className="Description-Right">
                            <div className="Right-Desc">{props.SalesName}</div>
                            <div className="Right-Desc">{props.SalesPhone}</div>
                            <div className="Right-Desc">{props.SalesEmail}</div>
                            <div className="Right-Desc Contact-Web">{props.SalesWeb}</div>
                        </div>
                    </div>
                    
                </div>
                <span className="Contact-Gap"></span>
                <div className="Contact-Right">
                    <div className="Contact-Header">MANUFACTURER</div>
                        <div className="Contact-Content">
                            <div className="Description-Left">
                                <div>Department</div>
                                <div>Phone</div>
                                <div>Email</div>
                                <div>Web</div>
                            </div>
                            <div className="Description-Right">
                                <div className="Right-Desc">{props.ManuDepartment} </div>
                                <div className="Right-Desc">{props.ManuPhone}</div>
                                <div className="Right-Desc">{props.ManuEmail}</div>
                                <div className="Right-Desc Contact-Web">{props.ManuWeb}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}

export default ProductContact;