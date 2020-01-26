import React, { Component } from 'react';
import axios from 'axios';
import './SoldiersPage.css';
import Axios from 'axios';
export default class SoldiersPage extends Component {
    state = { fromDate: '', untilDate: '', sendRequset: '' }
    render() {
        if (this.state.sendRequset) {
            axios.get('/soldiersDate')
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else{
            
        }
  
    let fromDate, untilDate;
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
            // const datefamily = {from:from , Until :Until , CurrentAimail:localStorage.Email}
            // axios.post("/SoldierDate" ,datefamily ).then(res =>{
               
            //  console.log(res,"this is response");
             
        }}>send</button>
    </div>
)
    }
}
