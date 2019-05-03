import React from 'react';

import './Range.css'

const Range =(props)=>{
    // const getStartValue = (e) =>{
    //     props.start_value = e.target.value;
    // }
    return(
        <div className="Range">
            <div className="Range-Title">
                <div className="Range-Icon">
                    <span className="fa fa-long-arrow-up"></span>
                    <span className="fa fa-long-arrow-down"></span>
                </div>
                <div className="Range-Name">{props.name}</div>
            </div>
            <div className="Range-Input">
            {/* onChange={(e)=>{getStartValue(e)}} */}
                <input type="text" className="Input-Box"  value={props.start_value}  
                onChange={(e)=>{props.start_value = e.target.value}}/>
                <div className="Input-Bar">
                    <span className="fa fa-circle"></span>
                    <hr className="Range-Hr"/>
                    <span className="fa fa-circle"></span>
                </div>
                <input type="text" className="Input-Box" value={props.end_value}/>
            </div>
        </div>
    )
}

export default Range;