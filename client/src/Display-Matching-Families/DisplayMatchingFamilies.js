import React, { Component } from "react";
import "./DisplayMatchingFamilies.css";
import solimg from "../images/soldiers-10.jpg";
import axios from "axios";
export default class DisplayMatchingFamilies extends Component {
  state = {ssuccessMatch : false};

  displayContacxt(familiesArray , componentDisplayFamilies){
   if(this.state.ssuccessMatch){
     console.log('successMatch');
      return `${localStorage.name}   Levi family approved your application and hosted you on the date 1.1.2020`;
   }
    else if(familiesArray.length > 0){
    console.log('componentDisplayFamilies' , this.state.ssuccessMatch);
    
      return componentDisplayFamilies   
   }
   else{
    console.log('No result');
      return <h3>No result</h3>
   }
  }


  

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
                
              </a>
            </div>
            <button className="buttonSendReqHosting" onClick = {()=>{
              axios.post("/sendMail", { 
                email: obj.email,
                familyName: obj.familyname,
                message:`${localStorage.name} wants to stay with you on the ${localStorage.fromDate} date.`})
              .then(response => {
                console.log(response);

                this.setState({ssuccessMatch : true})
              })
              .catch(err => {
                console.log(err);
              });
            }}>send</button>
          </div>
        </div>
      );
    });
    return (
      <div className="warpResultMAtch">

          {/* {displayFimilies} */}
        {/* {(families.length > 0) ? displayFimilies : <h3>No result</h3>} */}
        {this.displayContacxt(families ,displayFimilies)}
      </div>
    )
  }
}
