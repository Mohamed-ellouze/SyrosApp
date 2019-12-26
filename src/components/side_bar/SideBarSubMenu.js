import React, { Component } from 'react';
import "./SideBar.scss"
class SideBarSubMenu extends Component {
    constructor(props){
        super(props)
    }
 render(){
     console.log(this.props.object)
  return (
    <div className="submenu">
       <p>
        {this.props.object}
       </p>
    </div>
  );
 }
}

export default SideBarSubMenu;
