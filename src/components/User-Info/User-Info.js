import React from 'react';

import './User-Info.css'

const UserInfo = () =>(
    <div className="User-Info">
        <div className="UserName">Projects</div>
        <img src={require('../../assets/Image/user.jpg')} className="UserImage"  alt="user"/>    
    </div>
);

export default UserInfo;