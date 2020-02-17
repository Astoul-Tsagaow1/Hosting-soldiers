import React, { Component } from "react";
import axios from "axios";
import "./SoldiersPage.css";
import DisplayMatchingFamilies from "../Display-Matching-Families/DisplayMatchingFamilies";
import Fooetr from "../Footer/Footer";
export default class SoldiersPage extends Component {
  state = { DisplayMatchingFamilies: false, resultFamily: [] , alertSuccessfuly: false, alertEnterFullDate: false , from:'',until:'' };
  searchAccommodation = ()=>{
    if (this.state.from === '' || this.state.until === '') {
      console.log("pless insert date");
      this.setState({ alertEnterFullDate: true });
    } else {
    const dateSoldier = {
      fromDate: this.state.from,
      untilDate: this.state.until,
      CurrentEmail: localStorage.email
    };
    axios
      .post("/SoldierDate", dateSoldier)
      .then(res => {
        console.log(res.data, "this is response soldiers date ");
        let resultFamily = res.data;
        this.setState({ DisplayMatchingFamilies: true, resultFamily: resultFamily, from:"" , until:"" });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  }
  


  render() {
    let fromDate, untilDate;
    console.log(this.state);
    return (
      <div className = "warpAllSoldierPage">
        <div className = "backSoliderPage">
            
        </div>
      <div className="soldierPageSearch">
        <h3>Find hosting</h3>
        From what date:
        <input
        className = "inputSearchDate"
          type="date"
          name="bday"
          value = {this.state.from}
          onChange={e => {
            fromDate = e.target.value;
            this.setState({until:this.state.until,from:fromDate})
          }}
        ></input>
        Till what date:
        <input
        className = "inputSearchDate"
          type="date"
          name="bday"
          value = {this.state.until}
          onChange={e => {
            untilDate = e.target.value;
            this.setState({until:untilDate,from:this.state.from})
          }}
        ></input>

        <button
         type="button" 
         class="btn btn-success buttonSearchAccommodation"
         href = "#resultFamilesHrf"
         onClick={this.searchAccommodation}
         >
          Search
          </button>
        </div>

        <div className="resultFamiles" id = "resultFamilesHrf">
          {this.state.DisplayMatchingFamilies ? (
            <DisplayMatchingFamilies  resultMatch={this.state.resultFamily} />
          ) : (
            ""
          )}
        </div>

        <Fooetr/>
        
      </div>
    );
  }
  componentDidMount(){
    sessionStorage.setItem("page","soldierHomePage");
    this.props.UserRegister("SoldierNavBar");
  }
 componentWillUnmount(){
   sessionStorage.removeItem("page");
   this.props.UserRegister("SoldierNavBar");
 }
}
