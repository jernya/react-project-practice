import React from 'react';
import AddtoBtn from '../AddtoBtn/AddtoBtn';
import './Compare-Item.css';
const CompareItem = (props) => {
    return (
        <div>
            <div className=" Compare-Item-Title">
                <div className="Compare-Item-Firstline">
                    <AddtoBtn />
                    <span className="Compare-Item-Verified">
                        Verified 08/02/1999
                    </span>
                </div>
                <div>
                    <img src={require('../../assets/Image/fan.png')} className="Compare-Item-Image"  alt="Detail-Image"/>    
                </div>
            </div>
            <div className="Compare-Item-Header"> </div>
            <div className="Compare-Item-Right">
                <div className="Compare-Item-Desc">{props.Brand}</div>
                <div className="Compare-Item-Desc">{props.Series}</div>
                <div className="Compare-Item-Desc">{props.Model}</div>
            </div>

            <div className="Compare-Item-Header"> </div>
            <div className="Compare-Item-Right">
                <div className="Compare-Item-Desc">Commecial </div>
                <div className="Compare-Item-Desc">Indoor</div>
                <div className="Compare-Item-Desc">Roof</div>
                <div className="Compare-Item-Desc">With light</div>
                <div className="Compare-Item-Desc">{props.Year}</div>
            </div>
            
            <div className="Compare-Item-Header"> </div>
            <div className="Compare-Item-Right">
                <div className="Compare-Item-Desc">{props.Airflow} </div>
                <div className="Compare-Item-Desc Compare-Item-Split">
                    <div className="Compare-Item-Split-Left">Min</div>
                    <div className="Compare-Item-Split-Right">{props.MinPower}</div>
                    <div className="Compare-Item-Split-Left">Max</div>
                    <div className="Compare-Item-Split-Right">{props.MaxPower}</div>
                </div>
                <div className="Compare-Item-Desc Compare-Item-Split">
                    <div className="Compare-Item-Split-Left">Min</div>
                    <div className="Compare-Item-Split-Right">0</div>
                    <div className="Compare-Item-Split-Left">Max</div>
                    <div className="Compare-Item-Split-Right">220</div>
                </div>
                <div className="Compare-Item-Desc Compare-Item-Split">
                    <div className="Compare-Item-Split-Left">Min</div>
                    <div className="Compare-Item-Split-Right">{props.MinSpeed}</div>
                    <div className="Compare-Item-Split-Left">Max</div>
                    <div className="Compare-Item-Split-Right">{props.MaxSpeed}</div>
                </div>
            </div>

        </div>
    )
}

export default CompareItem;