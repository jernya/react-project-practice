import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Search-Bar.css'
class SearchBar extends Component {
    state={
        selectedCatalog:'',
        inputItem:'',
        productPage:false
    }
    getCurrentOption =(event)=>
    {
      console.log(event);
      this.setState({
        selectedCatalog : event.target.value
      })
      console.log(this.state.selectedCatalog);
      console.log('_________________')
   }   
   searchDataHandler = () =>{
     this.setState({
       productPage:true
     })
    }
    render() {
      let redirect =null;
      if(this.state.productPage){
        redirect = <Redirect to='/product' />

      }
      return (
        <div className="Searchbar">
          {redirect}
          {/* onChange={this.getCurrentOption} */}
          {/* onChange={(event)=>{this.getCurrentOption(event)}} */}
          <select className="Search-Select" value = {this.state.selectedCatalog} onChange={this.getCurrentOption} >
              <option value="Mechanical">Mechanical</option>
              <option value="Electrical">Electrical</option>
          </select>
          <input type="text" className="Search-Input"/>
          <span className="fa fa-caret-down "></span>
          <span className="fa fa-search " onClick={this.searchDataHandler}></span>
        </div>
      );
    }
  }

export default SearchBar;