import React, { Component } from "react";
import axios from "axios";
import "./SoldiersPage.css";
import DisplayMatchingFamilies from "../Display-Matching-Families/DisplayMatchingFamilies";
// import Axios from "axios";
export default class SoldiersPage extends Component {
  state = { DisplayMatchingFamilies: false, resultFamily: [] , alertSuccessfuly: false, alertEnterFullDate: false , from:'',until:'' };

  render() {
    let fromDate, untilDate;

    return (
      <div className = "warpAllSoldierPage">
        <div className = "backSoliderPage">
            
        </div>
      <div className="soldierPageSearch">
        <h3>SoldiersPage</h3>
        From what date:
        <input
          type="date"
          name="bday"
          onChange={e => {
            fromDate = e.target.value;
            this.setState({until:this.state.until,from:fromDate})
          }}
        ></input>
        Till what date:
        <input
          type="date"
          name="bday"
          onChange={e => {
            untilDate = e.target.value;
            this.setState({until:untilDate,from:this.state.from})
          }}
        ></input>
{/* working about hrf */}
        <a href="#top"><button href = "#resultFamilesHrf"
          onClick={() => {
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
                this.setState({ DisplayMatchingFamilies: true, resultFamily: resultFamily });
              })
              .catch(function(error) {
                // handle error
                console.log(error);
              });
          }}}
        >
          send
        </button></a>
        </div>
        <div className="resultFamiles" id = "resultFamilesHrf">
          {this.state.DisplayMatchingFamilies ? (
            <DisplayMatchingFamilies resultMatch={this.state.resultFamily} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  componentDidMount(){
    this.props.UserRegister("SoldierNavBar");
    
  }
 
}
