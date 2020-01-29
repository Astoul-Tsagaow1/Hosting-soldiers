import React, { Component } from 'react';
import axios from 'axios';
import './SoldiersPage.css';
import Axios from 'axios';
export default class SoldiersPage extends Component {
    state = {flag:false , resultFamily : ''}
    render() {
    let fromDate, untilDate,optionsHosting;
    if(this.state.flag){
        optionsHosting = this.state.resultFamily.map((obj , index)=>{return(
            <div>
                <h1>{obj}</h1>
           </div>)})
    }
    
return (

    <div className="soldierPage">
        <h3>SoldiersPage</h3>
        From what date:<input type="date" name="bday" onChange={(e) => {
            fromDate = e.target.value;
        }}></input>
        Till what date:<input type="date" name="bday" onChange={(e) => {
            untilDate = e.target.value;
        }}></input>
        <button onClick={() => {
            const dateSoldier = {fromDate:fromDate , untilDate :untilDate , CurrentEmail:localStorage.email};
            axios.post("/SoldierDate" ,dateSoldier ).then(res =>{
               
             console.log(res.data,"this is response soldiers date ");
             let resultFamily = res.data;
            
            this.setState({flag:true , resultFamily:resultFamily})
        }

            
             
 )}}>send</button>
 {this.state.flag?{optionsHosting}:''}
 
    </div>
)
    }
}
