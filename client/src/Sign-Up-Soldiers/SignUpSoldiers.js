import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./SignUpSoldiers.css";
export default class SignUpSoldiers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      age: "",
      quite: "",
      identityNumber: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
      autogo: "" ,
      hostingHistory: [],
      loneSoldier: false,
      flage: false
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelChange(e) {
    console.log(e.target.name);
    console.log(e.target.value, "value before");
    let loneSoldier;
    if (e.target.name === "loneSoldier") {
      e.target.value === "false"
        ? (loneSoldier = e.target.value = true)
        : (loneSoldier = e.target.value = false);
      console.log(loneSoldier, "value after");
      this.setState({ [e.target.name]: loneSoldier , autogo : true });
    } else {
      this.setState({ [e.target.name]: e.target.value  , autogo : true });
    }
  }

  handelSubmit = event => {
    event.preventDefault();
    const soldierObj = {
      name: this.state.name,
      lastName: this.state.lastName,
      age: this.state.age,
      quite: this.state.quite,
      identityNumber: this.state.identityNumber,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      address: this.state.address,
      loneSoldier: this.state.loneSoldier,
      hostingHistory: this.state.hostingHistory
    };
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("user", "soldier");
    localStorage.setItem("phoneNumberSoldirs", this.state.phone);
    localStorage.setItem("soldierName", this.state.name);
    console.log(soldierObj, "soldier obj---------------------");
    axios
      .post("/soldiers", { soldierObj})
      .then(res => {
        if (res.status === 201) {
          console.log(res.data, "Welcome to your page");
          this.props.UserRegister(true);
          localStorage.setItem("user", 'soldier');
          localStorage.setItem("name",this.state.name);
          this.props.changeAuthentication(localStorage.user);
          this.setState({ flage: "soldier"});
        } else {
          console.log(res.data.emailExist.email, "allredy exsit");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.loneSoldier, "sate.lonesoldier");
    return (
      <div className="warpFprPOsition">
        {this.state.flage ? <Redirect to="/SoldiersPage" /> : ""}
        <div className="contentSoldiers">
          <form className="warpInputs" onSubmit={this.handelSubmit}>
            <div className="titleSignUp">
              <h2 className="titleSignUp">Sign up</h2>
            </div>

            <div className="warpb">
              <div className="asideLeft">
                <input
                  className="asideLeft-item inputs"
                  name="name"
                  value={this.state.name}
                  type="text"
                  placeholder="name"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideLeft-item inputs"
                  name="lastName"
                  value={this.state.lastName}
                  type="text"
                  placeholder="last name"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideLeft-item inputs"
                  name="age"
                  value={this.state.age}
                  type="number"
                  placeholder="age"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideLeft-item inputs"
                  name="quite"
                  value={this.state.quite}
                  type="text"
                  placeholder="quite"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideLeft-item inputs"
                  name="identityNumber"
                  value={this.state.identityNumber}
                  type="number"
                  placeholder="identity num"
                  onChange={this.handelChange}
                ></input>
                <h5 id="checkBox-Titel"> Lone soldier:</h5>
               
                <input
                  id="checkBox"
                  className="asideLeft-item inputs"
                  name="loneSoldier"
                  value={this.state.loneSoldier}
                  type="checkbox"
                  onChange={this.handelChange}
                ></input>
              </div>

              <div className="asideRight">
                <input
                  className="asideRight-item inputs"
                  name="email"
                  value={this.state.email}
                  type="email"
                  placeholder="email"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideRight-item inputs"
                  name="phone"
                  value={this.state.phone}
                  type="number"
                  placeholder="phone"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideRight-item inputs"
                  name="password"
                  value={this.state.password}
                  type="password"
                  placeholder="password"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideRight-item inputs"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  type="password"
                  placeholder="Confpassword"
                  onChange={this.handelChange}
                ></input>
                <input
                  className="asideRight-item inputs"
                  name="address"
                  value={this.state.address}
                  type="text"
                  placeholder="address"
                  onChange={this.handelChange}
                ></input>
                <button
                  id="button"
                  className="asideRight-item submitbutoon"
                  type="submit"
                  onChange={() => {}}
                >
                  Submit{" "}
                </button>
              </div>
            </div>
          </form>
          {/* warp for position */}
          <div className="blurSoldiers"></div>
        </div>
      </div>
    );
  }
}
