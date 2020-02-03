import React, { Component } from "react";
import "./DisplayMatchingFamilies.css";
import solimg from "../images/soldiers-10.jpg";
export default class DisplayMatchingFamilies extends Component {
  render() {
    const families = this.props.resultMatch;
    const displayFimilies = families.map((obj, index) => {
      return (
        <div id="cards" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={solimg}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Family:{obj.familyname}</h5>
              <p className="card-text">Hello soldier</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">City:{obj.familyCity}</li>
              <li className="list-group-item">From date:{obj.fromDate}</li>
              <li className="list-group-item">until date:{obj.untilDate}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
            <button className="buttonSendReqHosting">send</button>
          </div>
        </div>
      );
    });
    return (
      <div className="warpResultMAtch">

          {/* {displayFimilies} */}
        {(families.length > 0) ? displayFimilies : <h3>No result</h3>}
      </div>
    )
  }
}
