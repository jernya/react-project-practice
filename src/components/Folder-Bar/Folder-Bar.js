import React, {Component}from 'react';

import './Folder-Bar.css';

class FolderBar extends Component{
    // constructor(props){
    //     super(props);
    // }
    state ={
        currentStatus :this.props.status ==="false"? false:true
    }
    folderHandler = ()=>{
        this.setState({
            currentStatus:!this.state.currentStatus
        })
    }
    render(){
        let showFolder = null;
        let folderContent = null;
        if(this.state.currentStatus){
            showFolder = <span className="fa fa-caret-down Folder-Icon"  onClick={this.folderHandler}></span> 
            folderContent = this.props.content;
        } else {
            showFolder = <span className="fa fa-caret-right Folder-Icon" onClick={this.folderHandler}></span>
        }
        return(
            <div>
                <div className="Folder-Bar">
                    <div className="Folder-Name">{this.props.name}</div>
                    {showFolder}
                </div>
                <div className="Content-Border">
                    
                {folderContent}
                </div>
            </div>
        )
    }
}
export default FolderBar;