import React,{Component, useState } from 'react';
import{connect} from 'react-redux'
import SideBarSubMenu from './SideBarSubMenu';
import './SideBar.scss'
import { Collapse, CardBody, Card } from 'reactstrap';


class SideBar extends Component {
  constructor(props){
      super(props)
      this.state={
          isOpen:false

      }
      this.toggle = this.toggle.bind(this);
  }
    

    toggle () {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        console.log(this.state.isOpen)
        return (
            <div className="side-bar">
                {
                    this.props.SideBarTitles.map((el)=>
                    <div className="module">
                        <div className="menu-title" onClick={()=>this.toggle()} style={{ marginBottom: '1rem' }} >
                           
                                {el.icon}
                                <h4>{el.name}</h4>
                        </div>
                        <Collapse isOpen={this.state.isOpen}>
                            <Card>
                                <CardBody>
                                 {el.submenu && el.submenu.map(el=><SideBarSubMenu  object={el.name}/>)}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                    )
                }    
            </div>
          )
    }
    }
 

const mapStateToProps = (state) =>{
    return{
        SideBarTitles : state.SideBarTitles
    }
}
const ConnectedSideBar = connect(mapStateToProps)(SideBar)

export default ConnectedSideBar;
