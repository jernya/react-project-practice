import React, {Component} from 'react';
import SearchBar from '../../../../components/Search-Bar/Search-Bar';
import UserInfo from '../../../../components/User-Info/User-Info';

import './Header.css';

class Header extends Component {
    render(){
        return(
            <div className = "Header">
                <img src={require('../../../../assets/Image/joole.png')} className="Header-Logo" alt="logo" />
                <div className="Header-SearchBar"><SearchBar /></div>
                <div className="Header-UserInfo"><UserInfo /></div>
            </div>
        )
    }
}
export default Header;