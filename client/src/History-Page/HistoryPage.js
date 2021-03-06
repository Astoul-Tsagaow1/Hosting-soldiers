import React, { Component } from 'react';
import axios from "axios";
import HistoryFamily from "../Display-Family-History/HistoryFamily";
import DisplaySoldierHistory from "../Display-Soldier-History/DisplaySoldierHistory";
import "./HistoryPage.css";
export default class historyPage extends Component {
   state = {result : "" , renderPage:false}
    
    render() {
        let user = localStorage.user;
        return ( 
            <div className = "warpAllHistory">    
                {(user === "soldier") ? <DisplaySoldierHistory soldierHistory ={this.state.result}/> : <HistoryFamily FamilyHistory = {this.state.result}/>}
            </div>
        )
    }

    componentDidMount(){
        this.props.UserRegister(false);
        let user = localStorage.user;
        let emailSearch = {email : localStorage.email};
        let userHistory;
        (user === "soldier") ? userHistory = "/historySoldier" : userHistory = "/historyFamily"
        axios.post(`${userHistory}` , {emailSearch})
            .then(response=>{
                console.log(response.data);
                let temp = [...response.data]
                this.setState({result : temp });
            })
            .catch(function (error) {
                console.log(error);
  })
  let userNavBar;
  (user === "soldier") ? userNavBar = "SoldierNavBar" : userNavBar = "FamilyNavBar";
  ;
    }
}  