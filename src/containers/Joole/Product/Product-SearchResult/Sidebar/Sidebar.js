import React,{Component} from 'react';
// import Range from '../../../../components/Range/Range';
// import FolderBar from '../.././../../components/Folder-Bar/Folder-Bar';
import Range from '../../../../../components/Range/Range';
import FolderBar from '../../../../../components/Folder-Bar/Folder-Bar';
import './Sidebar.css';

class Sidebar extends Component{
    state = {
        selectedType:"Product",
        showType:false,
        // style:{

        // }
    }
    getProductType(){
        this.setState({
            selectedType:"Product",
            // style:{
            //     backgroundColor: "rgb(79, 131, 173)",
            //     color:"white"
            // }
        })
    }

    render(){
        // ===========control show type icon=============
        let typeContent = <div className="Bottom-Border">
            <div> typeA:<input type="checkbox"/></div>
            <div>typeB:<input type="checkbox"/></div>
         </div>
        // ==============technical content==============
        let technicalContent =  <div className="Bottom-Border">
            <Range name="Airflow(CFM)" start_value="2000" end_value="10,000" />
            <Range name="Max power(W)" start_value="9.84" end_value="96.52" />
            <Range name="Sound at max speed(dBA)" start_value="20" end_value="80" />
            <Range name="Fansweep diameter(in)" start_value="18" end_value="96" />
            <Range name="Fansweep diameter(in)" start_value="18" end_value="96" />
        </div>
         // ==============Brand content==============
        let brandContent = <div className="Bottom-Border">
            <div>Brand A:<input type="checkbox"/></div>
            <div>Brand B:<input type="checkbox"/></div>
        </div>
        // ==============Past content==============
        let pastContent = <div className="Bottom-Border">
         <Range name="Firm" start_value="0" end_value="10" />
         <Range name="Global" start_value="0" end_value="1492" />
        </div>
        // ==============Certifications content==============
        let certiContent = <div className="Bottom-Border">
            <div>Certification A:<input type="checkbox"/></div>
            <div>Certification B:<input type="checkbox"/></div>
        </div>


        return(
            <div className="Sidebar">
                <div className="Side-Title Bottom-Border"> 
                    <div className="Title-Search">Search:</div>
                    <button className="Title-Btn">Save</button>
                    <button className="Title-Btn">Clear</button>
                </div>
                <div className="Side-Type Bottom-Border">
                    <div className="Type-Product" onClick={this.selectedType}>Product</div>
                    <div className="Type-Project">Project</div>
                </div>
                <FolderBar name="Product Type" status="false" content={typeContent} />
                <div className="Side-Model Bottom-Border">
                    <span className="Model-Year">Model year:</span>
                    <span className="Model-Input">
                        <input type="text" className="Input-Year" />
                        <hr/>
                        <input type="text" className="Input-Year"/>
                    </span>
                </div>
                <FolderBar name="Technical Specification" status="true" content={technicalContent} />
                <FolderBar name="Brand" status="false" content={brandContent}/>
                <FolderBar name="Past Selections" status="true" content={pastContent} />
                <FolderBar name="Certifications" status="false" content={certiContent}/>
            </div>
        )
    }
}

export default Sidebar;