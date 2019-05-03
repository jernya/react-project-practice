import React from 'react';
import './Compare-Catalog.css';

const CompareCatalog = () =>{
    return (
        <div className="Compare-Left-Bar"> 
            <div className="Compare-Left-Top-Space"></div>
            <div className="Compare-Header">DESCRIPTION</div>
            <div className="Compare-Content">
                <div className="Compare-Description">
                    <div className="Compare-Desc-Name">Manufacturer</div>
                    <div className="Compare-Desc-Name">Series</div>
                    <div className="Compare-Desc-Name">Model</div>
                </div>
            </div>
            <div className="Compare-Header">TYPE</div>
            <div className="Compare-Content">
                <div className="Compare-Description">
                    <div className="Compare-Desc-Name">Use Type</div>
                    <div className="Compare-Desc-Name">Application</div>
                    <div className="Compare-Desc-Name">Mounting Location</div>
                    <div className="Compare-Desc-Name">Accessories</div>
                    <div className="Compare-Desc-Name">Model year</div>
                </div>
            </div>
            
            <div className="Compare-Header">TECHNICAL SPECIFICATIONS</div>
            <div className="Compare-Content">
                <div className="Compare-Description">
                    <div className="Compare-Desc-Name">Airflow(CFM)</div>
                    <div className="Compare-Desc-Name">Power(W)</div>
                    <div className="Compare-Desc-Name">Operating voltage(v)</div>
                    <div className="Compare-Desc-Name">Fan speed(RPM)</div>
                </div>
            </div>
        </div>
    )

}
export default CompareCatalog;