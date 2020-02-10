import React, { Component } from 'react';
import axios from "axios";
import HistoryFamily from "../Display-Family-History/HistoryFamily";
export default class historyPage extends Component {
   
   state = {result : ""}
    
    render() {
        let user = localStorage.user;
         
        return (
            
            <div>
                
                {(user === "soldier") ? "" : <HistoryFamily FamilyHistory = {this.state.result}/>}
            </div>
        )
    }

    componentDidMount(){
        let user = localStorage.user;
        let emailSearch = {email : localStorage.email};
        let userHistory;
        (user === "soldier") ? userHistory = "/historySoldier" : userHistory = "/historyFamily"
        axios.post(`${userHistory}` , {emailSearch})
            .then(response=>{
                console.log(response.data);
                let temp = [...response.data]
                this.setState({result : temp });
                // console.log(currentComponent.state.result)
            })
            .catch(function (error) {
                
                console.log(error);

  })
    }
}
