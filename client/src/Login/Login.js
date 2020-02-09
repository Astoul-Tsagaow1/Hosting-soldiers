import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";

export default class Login extends Component {
  state = { flage: "", flag2: false, show: true, setShow: false };
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
            required="required"
            onChange={e => {
              email = e.target.value;
            }}
          />
          <br />
          <input
            className="Password-Login"
            placeholder=" Password"
            type="password"
            required="required"
            onChange={e => {
              password = e.target.value;
            }}
          />

          <button
            className="submitbutoon Login-butoon"
            onClick={() => {
              console.log(email);
              console.log(password);

              if (email === undefined && password === undefined) {
                this.setState({ flag2: true });
              } else {
                let objUser = { Email: email, password: password };
                console.log(objUser, " this is the obj");
                axios
                  .post("/Login", objUser)
                  .then(res => {
                    console.log(res, "this is the data");
                    console.log(res.status, "this is status");

                    if (res.status === 201) {
                      console.log(res, "inside familys");
                      localStorage.setItem("email", objUser.Email);
                      localStorage.setItem("user", "family");
                      localStorage.setItem("image", res.data.image);

                      this.props.changeAuthentication(localStorage.user);
                      this.setState({ flage: true });
                    } else if (res.status === 209) {
                      console.log(res.data, "inside soldiars");
                      localStorage.setItem("email", objUser.Email);
                      localStorage.setItem("user", "soldier");
                      localStorage.setItem("name", res.data.name);
                      localStorage.setItem("fromDate", res.data.fromDate);
                      this.props.changeAuthentication(localStorage.user);
                      this.setState({ flage: false });
                    }

                    else if (res.status === 404){
               

                    }
                  })
                  .catch(err => {
                    console.log("Errr");
                           this.setState({flag2:true})
                    
                  });
              }
            }}
          >
            Login
          </button>

          {this.state.flag2 ? (
            <div
              class="alert alert-danger alert-dismissible h-25 fade show"
              role="alert"
            >
              <strong> One of the values ​​you entered is incorrect</strong>
              <button
                type="button"
                class="close"
                onClick={() => {
                  this.setState({ flag2: false });
                }}
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ) : (
            " "
          )}








          <div className="Blur-bg-Login-page"></div>


        </div>
      </div>
    );
  }
}
