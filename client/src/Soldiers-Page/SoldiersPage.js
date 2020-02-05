import React, { Component } from "react";
import axios from "axios";
import "./SoldiersPage.css";
import DisplayMatchingFamilies from "../Display-Matching-Families/DisplayMatchingFamilies";
import Axios from "axios";
export default class SoldiersPage extends Component {
  state = { flag: false, resultFamily: [] };
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
          }}
        ></input>
        Till what date:
        <input
          type="date"
          name="bday"
          onChange={e => {
            untilDate = e.target.value;
          }}
        ></input>
{/* working about hrf */}
        <a href="#top"><button href = "#resultFamilesHrf"
          onClick={() => {
            const dateSoldier = {
              fromDate: fromDate,
              untilDate: untilDate,
              CurrentEmail: localStorage.email
            };
            axios
              .post("/SoldierDate", dateSoldier)
              .then(res => {
                console.log(res.data, "this is response soldiers date ");
                let resultFamily = res.data;
                this.setState({ flag: true, resultFamily: resultFamily });
              })
              .catch(function(error) {
                // handle error
                console.log(error);
              });
          }}
        >
          send
        </button></a>
        </div>
        <div className="resultFamiles" id = "resultFamilesHrf">
          {this.state.flag ? (
            <DisplayMatchingFamilies resultMatch={this.state.resultFamily} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.UserRegister("SoldierNavBar");
  }
}
