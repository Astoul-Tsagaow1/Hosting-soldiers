import React, { Component } from "react";
import "./EditPageSoldier.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default class EditPageSoldier extends Component {
  state = {
    EmailIsIncorrect: false,
    MoveToSoldierPage: false,
    MoveToHomePage: false,
    PasswordDoesNotMatch:false,
    CancelErorrMsg:false
  };
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          lastName: "",
          age: "",
          quite: "",
          identityNumber: "",
          NewEmail: "",
          phone: "",
          password: "",
          confirmPassword: "",
          address: "",
          loneSoldier: false,
          flage: false
        };
        this.handelChange = this.handelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
          this.setState({ [e.target.name]: loneSoldier});
        } else {
          this.setState({ [e.target.name]: e.target.value});
        }
      }
    
      handleSubmit = event => {
        console.log("submit")
        event.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
        const soldierObj = {
          name: this.state.name,
          lastName: this.state.lastName,
          age: this.state.age,
          quite: this.state.quite,
          identityNumber: this.state.identityNumber,
          emailForUpdate: this.state.NewEmail,
          phone: this.state.phone,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          address: this.state.address,
          loneSoldier: this.state.loneSoldier,
          hostingHistory: this.state.hostingHistory,
          currentEmail : localStorage.email
        };
        console.log(soldierObj, "soldier obj---------------------");
        axios
        .patch("/UpdateSoldier", soldierObj)
        .then(response => {
          console.log(response.status, "inside axios");
          alert("soldier");
          if (response.status === 201) {
            console.log(response.status, "inside axios");
            console.log(response.data, "***147");
            localStorage.setItem("email", response.data.emailForUpdate);
            localStorage.setItem("user", "soldier");
            localStorage.setItem("phoneNumberSoldirs", response.data.phone);
            localStorage.setItem("soldierName", response.data.name);
            this.props.UserRegister(false);
            console.log("before redirect");
            this.setState({ MoveToSoldierPage: true });
          } else {
            console.log(response.data, "is exsit");
          }
          if (response.status === 203) {
            this.setState({ EmailIsIncorrect: true });
          }
        })
        .catch(err => {
          console.log("ERrrr");
          // this.setState({ EmailIsIncorrect: true });
        });
      }
      else{
        console.log("The password does not match");
        this.setState({PasswordDoesNotMatch:true})
      }
    
      };
    
  render() {
    return (
      <div className="warpFormEdit">
        {this.state.MoveToSoldierPage ? <Redirect to="/SoldiersPage" /> : ""}
        {this.state.MoveToHomePage ? <Redirect to="/" /> : ""}
        <form className="formEdit" onSubmit={this.handleSubmit}>
          <div className="form-row">

            <div className="form-group col-md-6">
              <label htmlFor = "inputName">Name</label>
              <input
                value={this.state.name}
                name="name"    
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
                onChange={this.handelChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor = "inputLastName">Last name</label>
              <input
              value = {this.state.lastName}
              name = "lastName"
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Last name"
                onChange={this.handelChange}
              />
            </div>
           

            <div className="form-group warpEmail">
              <label htmlFor = "inputEmail">Email</label>
              <input
              value = {this.state.NewEmail}
              name = "NewEmail"
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                onChange={this.handelChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor = "inputPassword">password</label>
              <input
                value = {this.state.password}
                name ="password"
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={this.handelChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor = "inputConfrimPassword">Confrim Password</label>
              <input
                value = {this.state.confirmPassword}
                name = "confirmPassword"
                type="password"
                className="form-control"
                id="inputConfrimPassword"
                placeholder="Password"
                onChange={this.handelChange}
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor = "inputPhone">Phone</label>
            <input
              value = {this.state.phone}
              name = "phone"
              type="number"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
              onChange={this.handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor = "inputquite">Quite</label>
            <input
              value = {this.state.quite}
              name = "quite" 
              type="text"
              className="form-control"
              id="inputquite"
              placeholder="Quite"
              onChange={this.handelChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor = "inputCity">City</label>
              <input 
              value = {this.state.address}
              name = "address"
              type="text" 
              className="form-control" 
              id="inputCity" 
              onChange={this.handelChange}
              />
            </div>

            <div className ="warpCheckBox">
            <input 
            value={this.state.loneSoldier}
            name="loneSoldier"
            className="form-check-input" 
            type="checkbox" 
            id="gridCheck" 
            onChange={this.handelChange}
            />
              <label className="form-check-label" htmlFor = "gridCheck">
                Lone soldier:
              </label>
              </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              
            </div>
          </div>
          <button 
          type="submit" 
          className="btn btn-primary"
          id = "editButton"
          >
                Edit account
          </button>
        </form>
        <button 
        className = "btn btn-danger"
        id = "deleteButton"
        onClick={() => {
          let answer = window.confirm(
            "Are you sure you want to delete your account with us? ? "
          );
          if (answer === true) {
            axios
              .delete(`/DeleteSoldier/${localStorage.email}`)
              .then(res => {
                console.log("Clear localstorege");

                localStorage.clear();
                if (res.status === 200) {
                  console.log("Befor redirect");

                  this.setState({ MoveToHomePage: true });
                }
                console.log("success");
              })
              .catch(er => {
                console.log("err");
              });
          } else {
            console.log("stay with use ");
          }
        }}
        >
            Delete accuont
        </button>
      </div>
    );
  }
  componentDidMount() {
    let user = localStorage.user;
    let userNavBar;
    user === "soldier"
      ? (userNavBar = "SoldierNavBar")
      : (userNavBar = "FamilyNavBar");
    this.props.UserRegister(userNavBar);
  }
}
