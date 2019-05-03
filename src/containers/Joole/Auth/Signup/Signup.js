import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import AuthCenter from '../../../../components/Auth-Center/Auth-Center';

import './Signup.css';

class Signup extends Component{
    state ={
        username:"",
        password:"",
        existed:true
    }
    checkSignup = () =>{
        this.setState( {
            existed:false
        })
        alert('success! to login page!')
    };
    render(){
        let redirect = null;
        if(!this.state.existed){
            redirect = <Redirect to="/login" />
        }
        return (
            <div className="Signup">
                {redirect}
                <div className="Signup-Border">
                    <div className="Signup-Center">
                        <AuthCenter />
                        <form className="Signup-Form">
                            <div className="form-group">
                                <input type="text" className="form-control Signup-Input"  placeholder="Username or Email" 
                                value = {this.state.username} onChange ={(event)=>this.setState({username:event.target.value})}/>
                                <span className="fa fa-user Signup-Icon"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control Signup-Input"  placeholder="Password"
                                value = {this.state.password} onChange ={(event)=>this.setState({password:event.target.value})}/>
                                <span className="fa fa-lock Signup-Icon"></span>
                            </div>
                            <button className="btn btn-info btn-sm Signup-Btn " onClick= {this.checkSignup}>Sign Up</button>
                        </form>
                    </div>
                </div>
                
            </div>
            
        );
    }  
}

export default Signup;