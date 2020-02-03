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
      <div className="soldierPage">
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
        <button
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
        </button>
        <div className="resultFamiles">
          {this.state.flag ? (
            <DisplayMatchingFamilies resultMatch={this.state.resultFamily} />
          ) : (
            "not"
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.UserRegister("SoldierNavBar");
  }
}
