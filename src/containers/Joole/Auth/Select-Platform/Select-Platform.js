import React, {Component} from 'react';
import AuthCenter from '../../../../components/Auth-Center/Auth-Center';
import SearchBar from '../../../../components/Search-Bar/Search-Bar';
import UserInfo from '../../../../components/User-Info/User-Info';

import './Select-Platform.css';

class SelectPlatform extends Component{
    render(){
        return (
            <div className="Select-Platform">
                <div className="Select-Border">
                    <div className="Select-User"><UserInfo /></div>
                    <div className="Select-Center">
                        <AuthCenter />
                        <SearchBar /> 
                        
                    </div>
                </div>
            </div>    
        );
    }   
}

export default SelectPlatform;