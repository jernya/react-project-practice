import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './AddtoBtn.css'

class AddtoBtn extends Component{
    state = {
        toCompare:false
    }
    addToCompare=()=>{
        this.setState({
            toCompare:true
        })
    }
    render(){
        let redirect = null;
        if(this.state.toCompare){
            redirect=<Redirect to="/compare" />
        }
        return(
            <button className="btn btn-info Item-Btn" > 
           {redirect}
            Add to
            <span className="fa fa-caret-down Btn-Icon"></span>
            </button>
        )
    }
}

export default AddtoBtn;
