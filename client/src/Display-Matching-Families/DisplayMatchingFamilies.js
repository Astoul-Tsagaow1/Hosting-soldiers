import React, { Component } from "react";
import "./DisplayMatchingFamilies.css";
import GuidelinesForContactingTheHostamily from "../Guidelines-for-contacting-the-host-family/GuidelinesForContactingTheHostamily";
import axios from "axios";
export default class DisplayMatchingFamilies extends Component {
  state = {
    ssuccessMatch: false,
    familyName: "",
    familyPhonNumber: "",
    AfterAlertNoResult: false
  };

  displayContacxt(familiesArray, componentDisplayFamilies) {
    if (this.state.ssuccessMatch) {
      console.log("successMatch");
      let familyDatalies = { ...this.state };
      return (
        <GuidelinesForContactingTheHostamily familyDatalies={familyDatalies} />
      );
        } else if (familiesArray.length > 0) {
          console.log("componentDisplayFamilies", this.state.ssuccessMatch);

          return componentDisplayFamilies;
        } 
        else if(this.state.AfterAlertNoResult){
          return "";
        }
    else {
      console.log("No result");
      return  (<div class="alert alert-warning alert-dismissible fade show NoRelevantFamiliesWereFoundAlert" role="alert">
      <strong>{localStorage.name}</strong> We're very sorry, there are no host families on this date.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick = {()=>{this.setState({AfterAlertNoResult : true})}}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>)
    }
  }

  componentWillReceiveProps(prevState, prevProps) {
    console.log(prevState, prevProps);
  }
  render() {
    console.log(this.props);

    const families = this.props.resultMatch;
    console.log(families);
    const displayFimilies = families.map((obj, index) => {
      return (
        <div id="cards" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={obj.image}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Family:{obj.familyname}</h5>
              <p className="card-text">{obj.discriptionFamily}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">City:{obj.familyCity}</li>
              <li className="list-group-item">From date:{obj.fromDate}</li>
              <li className="list-group-item">until date:{obj.untilDate}</li>
            </ul>
           
            <button
              className="buttonSendReqHosting   submitbutoon"
              onClick={() => {
                let ObjHistory = {
                  familyObj: {
                    email: obj.email,
                    familyName: obj.familyname,
                    hostingDate: obj.fromDate,
                    familyPhonNumber: obj.PhonNumber,
                    familyCity: obj.familyCity,
                    message: `${localStorage.name} wants to stay with you on the ${localStorage.fromDate} date.`,
                    emailSoldier: localStorage.email
                  },

                  soldierObj: {
                    emailFamily: obj.email,
                    soldierName: localStorage.name,
                    email: localStorage.email,
                    // phoneNumberSoldirs : localStorage.phoneNumberSoldirs,
                    hostingDate: obj.fromDate,
                    message: `Please contact the ${obj.familyname} family at ${obj.PhonNumber} as soon as possible to arrange your accommodation`
                  }
                };
                axios
                  .post("/sendMail", ObjHistory)
                  .then(response => {
                    this.setState({
                      ssuccessMatch: true,
                      familyName: obj.familyname,
                      familyPhonNumber: obj.PhonNumber
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }}
            >
              send
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="warpResultMAtch">
        {this.displayContacxt(families, displayFimilies)}
      </div>
    );
  }
}
