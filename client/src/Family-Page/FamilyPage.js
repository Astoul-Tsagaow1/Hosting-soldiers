import "./FamilyPage.css";
import axios from "axios";
import React, { Component } from "react";
import SmaileIcone from '../images/icons8-happy-100.png'
export default class FamilyPage extends Component {
  state = { alertSuccessfuly: false, alertEnterFullDate: false , from:'',until:''};
  render() {
    console.log("Family page");
    let from;
    let Until;
    let FamilyName = localStorage.namfamily;
    let familyimage = localStorage.image;

    if (from < Until) {
      console.log("noooooo");
    }
    return (
      <div className="Family-Page-Wrapper">
          <div className="Family-Page-Inputs-Wrapper">   {" "}
            <i><h3 className="Family-Page-Titel">Welcome {FamilyName} </h3></i>
            <img className="Family-image" src={familyimage} alt="some"></img>
            <h2 className="Family-Page-Titel">When can you host ?</h2>
           <strong >From ?{" "}</strong> 
            <input
              className="FamilyPage-input"
              type="date"
              onChange={e => {
                from = e.target.value;
                this.setState({until:this.state.until,from:from})
              }}
            />{" "}
           <strong > Until. ?{" "}</strong> 

           
            <input
              className="FamilyPage-input"
              type="date"
              onChange={e => {
                Until = e.target.value;
                this.setState({until:Until,from:this.state.from})
              }}
            />
            <button
              className="Family-Page-button submitbutoon"
              onClick={() => {
                console.log(this.state.from,"onclick-from");
                console.log(this.state.until,"onclick-until");
                if (this.state.from === '' || this.state.until === '') {
                  console.log("pless insert date");
                  this.setState({ alertEnterFullDate: true });
                } else {
                  const datefamily = {
                    fromDate: this.state.from,
                    untilDate: this.state.until,
                    CurrentEmail: localStorage.email
                  };
                  axios
                    .post("/datefamily", datefamily)
                    .then(res => {
                      console.log(res.status, "this is response Data family ");
                      if (res.status === 201) {
                        this.setState({ alertSuccessfuly: true });
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
            {this.state.alertSuccessfuly ? (
              <div class="alert alert-success" role="alert">
               Your date has been sent successfully, The soldier will contact you...{" "}
               <img src={SmaileIcone} height="30px"/>
               <button
                  type="button"
                  class="close"
                  onClick={() => {
                    this.setState({ alertSuccessfuly: false });
                  }}
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              ""
            )}
            {this.state.alertEnterFullDate ? (
              <div
                class="alert alert-danger alert-dismissible  h-80  fade show"
                role="alert"
              >
                <strong>Please enter full dates</strong>
                <button
                  type="button"
                  class="close"
                  onClick={() => {
                    this.setState({ alertEnterFullDate: false });
                  }}
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.UserRegister("FamilyNavBar");
  }
}
