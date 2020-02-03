import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
export default class Login extends Component {
  state = { flage: "" };
  renderSwitchLogin(arg) {
    switch (arg) {
      case true:
        return <Redirect to="/FamilyPage" />;
      case false:
        return <Redirect to="/SoldiersPage" />;
      default:
        return console.log("Login");
    }
  }
  render() {
    let email, password;
    return (
      <div className="bg-Login-Page">
        <div className="Wrapper-Login-content">
          <h1>Login</h1>
          {this.renderSwitchLogin(this.state.flage)}
          <input
            type="email"
            placeholder="Email"
            onChange={e => {
              email = e.target.value;
            }}
          />
          <br />
          <input
            className="Password-Login"
            placeholder=" Password"
            type="password"
            onChange={e => {
              password = e.target.value;
            }}
          />

          <button
            className="submitbutoon Login-butoon"
            onClick={() => {
              let objUser = { Email: email, password: password };
              console.log(objUser, " this is the obj");
              axios
                .post("/Login", objUser)
                .then(res => {
                  console.log(res, "this is the data");
                  console.log(res.status, "this is status");
               
                  if (res.status == 205) {
                    console.log(res.data, "inside familys");
                    localStorage.setItem("email", objUser.Email);
                    localStorage.setItem("user", 'family');
                    this.props.changeAuthentication(localStorage.user);
                    this.setState({ flage: true });
                  } 
                  else if (res.status == 209) {
                    console.log(res.data, "inside soldiars");
                    localStorage.setItem("email", objUser.Email);
                    localStorage.setItem("user", 'soldier');
                    this.props.changeAuthentication(localStorage.user);
                    this.setState({ flage: false });
                  }
                })
                .catch(err => {
                  console.log("Errr");
                });
            }}
          >
            Login
          </button>
          <div className="Blur-bg-Login-page"></div>
        </div>
      </div>
    );
  }
}
