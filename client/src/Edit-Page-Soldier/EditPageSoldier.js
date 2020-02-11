import React, { Component } from 'react'
import "./EditPageSoldier.css";
export default class EditPageSoldier extends Component {
    render() {
        return (
            <div>
               Name:
               <input type="text" className = "editInputs"></input>
               
               Last Name:
               <input type="text" className = "editInputs"></input>
            
               Age:
               <input type="text" className = "editInputs"></input>

               Quite:
               <input type="text" className = "editInputs"></input>

               Name:
               <input type="text" className = "editInputs"></input>

               Name:
               <input type="text" className = "editInputs"></input>
            </div>
        )
    }
    componentDidMount(){
        let user = localStorage.user;
        let userNavBar;
        (user === "soldier") ? userNavBar = "SoldierNavBar" : userNavBar = "FamilyNavBar";
        this.props.UserRegister(userNavBar);
    }
}
