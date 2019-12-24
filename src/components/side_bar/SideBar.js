import React,{Component} from 'react';
import{connect} from 'react-redux'



class SideBar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <section>
                    <h1>
                        Vente
                    </h1>
        {this.props.SideBarTitles.map(el=><h2>{el.name}</h2>)}
                    
                </section>
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
