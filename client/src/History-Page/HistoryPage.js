import React, { Component } from 'react';
import axios from "axios";
import HistoryFamily from "../HistoryFamily/HistoryFamily";
export default class historyPage extends Component {
    state = {result : ""}
    componentDidMount(){
        let user = localStorage.user;
        let emailSearch = {email : localStorage.email};
        let userHistory;
        (user === "soldier") ? userHistory = "/historySoldier" : userHistory = "/historyFamily"
        axios.post(`${userHistory}` , {emailSearch})
            .then(function (response) {
                console.log(response.data);
                this.setState({result :response.data });
            })
            .catch(function (error) {
                
                console.log(error);
  })
    }
    render() {
        let user = localStorage.user;
         
        return (
            
            <div>
                history historyPage
                {(user === "soldier") ? "" : <HistoryFamily FamilyHistory = {this.state.result}/>};
            </div>
        )
    }
}
