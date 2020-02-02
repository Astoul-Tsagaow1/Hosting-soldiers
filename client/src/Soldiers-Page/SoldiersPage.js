import React, { Component } from 'react';
import axios from 'axios';
import './SoldiersPage.css';
import Axios from 'axios';
export default class SoldiersPage extends Component {
    state = {flag:false , resultFamily : []}
    render() {
    let fromDate, untilDate,optionsHosting;
    if(this.state.flag == true){
        let families = [...this.state.resultFamily];
        optionsHosting = families.map((obj)=>{return(
            <div>
                <p>{obj.familyname}</p>
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
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
        }}>send</button>
 {this.state.flag?optionsHosting:'not'}
 
    </div>
)
    }
    componentDidMount(){
        this.props.UserRegister(true);
    }
}
