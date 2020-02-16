import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import iconEmail from '../images/icons8-email-100.png'
import iconePassword from '../images/icons8-password-96.png'
export default class Login extends Component {
  state = { flage: "", flag2: false, show: true, setShow: false , email :"", password:"" , inCorrectLogin : false};
  
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

  handelOnchange(e){
    console.log(e.target.name,"target name");
    console.log(e.target.value,"target value")
    this.setState({ email:e.target.value});
  }

  render() {
    
    let email, password;
    return (
      <div className="bg-Login-Page">
        <div className="Wrapper-Login-content">
          <h1 className="Login-Titel">Login</h1>

          {this.renderSwitchLogin(this.state.flage)}
          <img src={iconEmail} height="30px"/>         <input
            type="email"
            placeholder="Email"
            required="required"
            name = "email"
            value ={ this.state.email}
            onChange={(e)=>{console.log(e.target.name,"target name");
            console.log(e.target.value,"target value")
            email = e.target.value;
            this.setState({[e.target.name]:e.target.value});}}
          />
          <br />
          <img src={iconePassword} height="30px"></img>
          <input
            className="Password-Login"
            placeholder=" Password"
            type="password"
            name = "password"
            required="required"
            value = {this.state.password}
            onChange={(e)=>{console.log(e.target.name,"target name");
            console.log(e.target.value,"target value")
            console.log(email,"target value")
            password = e.target.value;
            this.setState({ [e.target.name]:e.target.value});}}
          />

          <button
            className="submitbutoon Login-butoon"
            onClick={() => {
              let objUser = { Email: this.state.email, password: this.state.password };
              console.log(this.state.email , "email onclick");
              console.log(this.state.password , "password on click");
              console.log(objUser, " this is the obj");

              if (objUser.Email === undefined && objUser.password === undefined) {
                
                this.setState({ flag2: true });
              } else {
               
                console.log(objUser, " this is the obj");
                axios
                  .post("/Login", objUser)
                  .then(res => {
                    console.log(res.data, "this is the data");
                    console.log(res.status, "this is status");

                    if (res.status === 201) {
                      console.log(res, "inside familys");
                      localStorage.setItem("email", objUser.Email);
                      localStorage.setItem("user", "family");

                      localStorage.setItem("image", res.data.image);
                      localStorage.setItem("name", res.data.familyname);

                      this.props.changeAuthentication(localStorage.user);
                      this.setState({ flage: true });
                    } else if (res.status === 209) {
                      console.log(res.data, "inside soldiars");
                      localStorage.setItem("email", objUser.Email);
                      localStorage.setItem("user", "soldier");
                      localStorage.setItem("name", res.data.familyname);
                      localStorage.setItem("fromDate", res.data.fromDate);
                      this.props.changeAuthentication(localStorage.user);
                      this.setState({ flage: false });
                    }
                    if(res.status === 203){
                      console.log(res.data,"password incorrect");
                      this.setState({flag2 : true ,email : res.data.email , password : password , inCorrectLogin : true});
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
