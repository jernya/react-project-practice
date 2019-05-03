import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import AuthCenter from '../../../../components/Auth-Center/Auth-Center';

import './Login.css';

class Login extends Component{
    state ={
        username:"",
        password:"",
        loggedin:false,
        signed:false
    }
    checkLogin = () =>{
        this.setState( {
            loggedin:true
        })
    };
 

    render(){
        let redirect = null;
        if(this.state.loggedin){
            redirect = <Redirect to="/selectPlatform" />
        }
       
        return (
            <div className="Login">
                {redirect}
                <div className="Login-Border">
                    <a href="/signup" className="SignupLink" >Sign up</a>
                    <div className="Log-Center">
                        <AuthCenter />
                        <form className="Login-Form">
                            <div className="form-group">
                                <input type="text" className="form-control Login-Input"  placeholder="Username or Email" 
                                value = {this.state.username} onChange ={(event)=>this.setState({username:event.target.value})}/>
                                <span className="fa fa-user Login-Icon"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control Login-Input"  placeholder="Password"
                                value = {this.state.password} onChange ={(event)=>this.setState({password:event.target.value})}/>
                                <span className="fa fa-lock Login-Icon"></span>
                            </div>
                            <button className="btn btn-info btn-sm Login-Btn" onClick= {this.checkLogin}>Log In</button>
                        </form>
                    </div>
                </div>
                
            </div>
            
        );
    }  
}

export default Login;