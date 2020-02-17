import React, { Component } from "react";
import "./GuidelinesForContactingTheHostamily.css";
export default class GuidelinesForContactingTheHostamily extends Component {
    state = {showAlert : true}
    showAlertFunction = (arg)=>{
        switch (arg) {
            case true:
               return (<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{localStorage.name}</strong> Your request was sent and received in the system.
                Please contact the this.{this.props.familyDatalies.familyName} family at
                {this.props.familyDatalies.familyPhonNumber} as soon as possible to arrange
                your accommodation
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick = {()=>{this.setState({showAlert : false})}}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>)
                break;
            case true:
                   return ""
                break;
        }
    }

    render(){
        return (
            <div className="warpDivAfterSendMail">
                {this.showAlertFunction(this.state.showAlert)}
            </div>
          );
    }
  
}
