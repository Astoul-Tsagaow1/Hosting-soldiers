import "./FamilyPage.css";
import axios from "axios";
import React, { Component } from "react";
export default class FamilyPage extends Component {
  state = { flage: false, flage2: false };
  render() {
    console.log("Family page");
    let from;
    let Until;
    let FamilyName = localStorage.namfamily;
    let familyimage = localStorage.image;
    return (
      <div className="Family-Page-Wrapper">
        <div className="Family-Page-Form">
          <div className="titel-family-page-wraper">
            {" "}
            <h1>Welcome {FamilyName} </h1>
            <img className="Family-image" src={familyimage} alt="some "></img>
          </div>

          <div className="Family-Page-Inputs-Wrapper">
            <h2>When can you host ?</h2>
            From ?{" "}
            <input
              type="date"
              onChange={e => {
                from = e.target.value;
              }}
            />
            Until ?{" "}
            <input
              type="date"
              onChange={e => {
                Until = e.target.value;
              }}
            />
            <button
              className="Family-Page-button submitbutoon"
              onClick={() => {
                if (from === undefined || Until === undefined) {
                  console.log("pless insert date");
                  this.setState({ flage2: true });
                } else {
                  const datefamily = {
                    fromDate: from,
                    untilDate: Until,
                    CurrentEmail: localStorage.email
                  };
                  axios
                    .post("/datefamily", datefamily)
                    .then(res => {
                      
                      console.log(res.status, "this is response");
                      if (res.status === 201) {
                        this.setState({ flage: true });
                      }
                    })
                    .catch(errr => {
                      console.log(errr);
                    });
                  console.log("after axios");
                }
              }}
            >
              Click to send{" "}
            </button>
            {this.state.flage ? (
              <p className="Date-is-send">
                Your date has been sent successfully
              </p>
            ) : (
              ""
            )}
            {this.state.flage2 ? (
              <div className="Date-is-NotEnter">
                <h1 className="Date-is-NotEnter-msg">Pleses enter date</h1>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="Family-Page-blur-background"></div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.UserRegister("FamilyNavBar");
  }
}
