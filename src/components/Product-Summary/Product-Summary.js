import React from 'react';
import './Product-Summary.css';

const ProductSummary = (props) =>{
    return(
        <div className="Product-Summary">
            <div className="Product-Summary-Title"> Product Summary</div>
            <div className="Product-Summary-List">
                <div className="Summary-Left">
                    <div className="Summary-Header">DESCRIPTION</div>
                    <div className="Summary-Content">
                        <div className="Description-Left">
                            <div>Manufacturer</div>
                            <div>Series</div>
                            <div>Model</div>
                        </div>
                        <div className="Description-Right">
                            <div className="Right-Desc">{props.Brand}</div>
                            <div className="Right-Desc">{props.Series}</div>
                            <div className="Right-Desc">{props.Model}</div>
                        </div>
                    </div>
                    <div className="Summary-Header">TYPE</div>
                    <div className="Summary-Content">
                        <div className="Description-Left">
                            <div>Use Type</div>
                            <div>Application</div>
                            <div>Mounting Location</div>
                            <div>Accessories</div>
                            <div>Model year</div>
                        </div>
                        <div className="Description-Right">
                            <div className="Right-Desc">Commecial </div>
                            <div className="Right-Desc">Indoor</div>
                            <div className="Right-Desc">Roof</div>
                            <div className="Right-Desc">With light</div>
                            <div className="Right-Desc">{props.Year}</div>
                        </div>
                    </div>
                </div>
                <span className="Summary-Gap"></span>
                <div className="Summary-Right">
                    <div className="Summary-Header">TECHNICAL SPECIFICATIONS</div>
                        <div className="Summary-Content">
                            <div className="Description-Left">
                                <div>Airflow(CFM)</div>
                                <div>Power(W)</div>
                                <div>Operating voltage(v)</div>
                                <div>Fan speed(RPM)</div>
                                <div>Number of fan speeds</div>
                                <div>Fan sweep diameter(in)</div>
                            </div>
                            <div className="Description-Right">
                                <div className="Right-Desc">{props.Airflow} </div>
                                <div className="Right-Desc Right-Desc-Split">
                                    <div className="Split-Left">Min</div>
                                    <div className="Split-Right">{props.MinPower}</div>
                                    <div className="Split-Left">Max</div>
                                    <div className="Split-Right">{props.MaxPower}</div>
                                </div>
                                <div className="Right-Desc Right-Desc-Split">
                                    <div className="Split-Left">Min</div>
                                    <div className="Split-Right">0</div>
                                    <div className="Split-Left">Max</div>
                                    <div className="Split-Right">220</div>
                                </div>
                                <div className="Right-Desc Right-Desc-Split">
                                    <div className="Split-Left">Min</div>
                                    <div className="Split-Right">{props.MinSpeed}</div>
                                    <div className="Split-Left">Max</div>
                                    <div className="Split-Right">{props.MaxSpeed}</div>
                                </div>
                                <div className="Right-Desc">7</div>
                                <div className="Right-Desc">{props.Diameter}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}

export default ProductSummary;