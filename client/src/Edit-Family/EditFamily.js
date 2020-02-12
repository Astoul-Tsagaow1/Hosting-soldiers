import React, { Component } from "react";
import axios from "axios";
import "./EditFamily.css";
import { Redirect } from "react-router-dom";
export default class SignUpFamily extends Component {
  state = {
    EmailIsIncorrect: false,
    MoveToFamilyPage: false,
    MoveToHomePage: false,
    PasswordDoesNotMatch:false,
    CancelErorrMsg:false
  };
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      femail: "",
      fPhonNumber: "",
      fNumberSoldiersHosts: "",
      fPassword: "",
      ConfirmePassword: "",
      FamilyDescription: "",
      fCity: "",
      fromDate: "",
      untilDate: "",
      file: "",
      hostingHistory: []
    };
    this.Hendelchange = this.Hendelchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  Hendelchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log("form");
    console.log(event.target.fname.value);
    if (this.state.fPassword === this.state.ConfirmePassword) {
      const Familyobj = {
        familyname: this.state.fname,
        email: this.state.femail,
        familyPhonNumber: this.state.fPhonNumber,
        familyNumberSoldiersHosts: this.state.fNumberSoldiersHosts,
        familyPassword: this.state.fPassword,
        familyConfirmePassword: this.state.ConfirmePassword,
        familyCity: this.state.fCity,
        fromDate: this.state.fromDate,
        untilDate: this.state.untilDate,
        FamilyDescriptionvlue: this.state.FamilyDescription,
        file: this.state.file,
        hostingHistory: this.state.hostingHistory
      };
      let ImgData = new FormData();
      ImgData.append("FamilyIMG", Familyobj.file);
      ImgData.append("familyname", Familyobj.familyname);
      ImgData.append("emailUpDate", localStorage.email);
      ImgData.append("email", Familyobj.email);
      ImgData.append("PhonNumber", Familyobj.familyPhonNumber);
      ImgData.append(
        "NumberSoldiersHosts",
        Familyobj.familyNumberSoldiersHosts
      );
      ImgData.append("Password", Familyobj.familyPassword);
      ImgData.append("ConfirmePassword", Familyobj.familyConfirmePassword);
      ImgData.append("familyCity", Familyobj.familyCity);
      ImgData.append("fromDate", Familyobj.fromDate);
      ImgData.append("untilDate", Familyobj.untilDate);
      ImgData.append("discriptionFamily", Familyobj.FamilyDescriptionvlue);
      ImgData.append("hostingHistory", Familyobj.hostingHistory);

      axios
        .patch("/Updatefamily", ImgData)
        .then(response => {
          alert("family");

          if (response.status === 201) {
            console.log(response.status, "inside axios");
            console.log(response.data, "***147");
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("namfamily", response.data.familyname);
            localStorage.setItem("image", "familyPhoto" + this.state.file.name);
            localStorage.setItem("user", "family");
            this.props.UserRegister(false);

            console.log("before redirect");
            this.setState({ MoveToFamilyPage: true });
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
    }else{
      console.log("The password does not match");
      this.setState({PasswordDoesNotMatch:true})
      
    }
  }

  render() {
    return (
      

        <div className="warpFormEdit"> 
         {this.state.MoveToFamilyPage ? <Redirect to="/FamilyPage" /> : ""}
        {this.state.MoveToHomePage ? <Redirect to="/" /> : ""}
          <h1 className="Sign-up-FamilyPage">Edit page</h1>
          <form className="formEdit" onSubmit={this.handleSubmit}>
        
              <div class="form-row">
            <div class="form-group col-md-6">
            <label htmlFor="fname"> Family-Name : </label>
              <input
                 value={this.state.fname}
                 name="fname"
                 type="text"
                 onChange={this.Hendelchange}
              />
            </div>
            <div class="form-group col-md-6">
            <label htmlFor="email"> e-mail : </label>
              <input
                value={this.state.femail}
                name="femail"
                type="email"
                onChange={this.Hendelchange}
              />{" "}
            </div>
            <div class="form-group warpEmail">
              <label htmlFor="Phone-Number"> Phone-Number : </label>
              <input
                value={this.state.fPhonNumber}
                name="fPhonNumber"
                id="Phone-Number"
                type="number"
                onChange={this.Hendelchange}
              />{" "}
            </div>
            <div class="form-group col-md-6">
            <label htmlFor="City"> City : </label>
              <input
                value={this.state.fCity}
                name="fCity"
                id="City"
                type="text"
                onChange={this.Hendelchange}
              />{" "}
            </div>
            <div class="form-group col-md-6">
            <label htmlFor="FamilyDescription"> About the family : </label>
              <textarea
                value={this.state.FamilyDescriptionvlue}
                name="FamilyDescription"
                id="FamilyDescription"
                rows="2"
                cols="39"
                placeholder="Ex:A family that loves soldiers very much and wants to host and make them happy .."
                onChange={this.Hendelchange}
              ></textarea>
            </div>
          </div>
          <div class="form-group">
          family photo :
              <input
                type="file"
                required
                name="imgf"
                className="file-input"
                onChange={e => {
                  this.setState({ file: e.target.files[0] });

                  console.log(this.state.file);
                }}
              ></input>{" "}
          </div>
          <div class="form-group">
          <label htmlFor="NumberSoldiers">
                {" "}
                Number of soliders you can host :{" "}
              </label>
             <input
                value={this.state.fNumberSoldiersHosts}
                name="fNumberSoldiersHosts"
                id="NumberSoldiers"
                type="number"
                onChange={this.Hendelchange}
              />{" "}
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
            <label htmlFor="Password"> Password : </label>
              <input
                value={this.state.fPassword}
                name="fPassword"
                type="Password"
                id="Password"
                onChange={this.Hendelchange}
              />{" "}
            </div>
            <div class="form-group col-md-4">
            <label htmlFor=" ConfirmePassword ">
                {" "}
                Confirme - Password :{" "}
              </label>
              <br />
              <input
                value={this.state.ConfirmePassword}
                name="ConfirmePassword"
                type="Password"
                id="ConfirmePassword"
                onChange={this.Hendelchange}
              />{" "}
            </div>
            
          </div>
        
          <button type="submit" className="submitbutoon">
                {" "}
                Edit account{" "}
              </button>
           
          </form>
          <button
            onClick={() => {
              let answer = window.confirm(
                "Are you sure you want to delete your account with us? ? "
              );
              if (answer === true) {
                axios
                  .delete(`/Delete/${localStorage.email}`)
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
            className="submitbutoon Delete-account"
          >
            {" "}
            Delete account{" "}
          </button>
          <br />
     
        {this.state.EmailIsIncorrect ? (
          <div
            class="alert alert-danger alert-dismissible  h-25 w-25 fade show"
            role="alert"
          >
            <strong> Email is incorrect</strong>
            <button
              type="button"
              class="close"
              onClick={() => {
                console.log("x");
                  this.setState({ EmailIsIncorrect: false });
              
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




{this.state.PasswordDoesNotMatch ? (
          <div
            class="alert alert-danger alert-dismissible  h-25 w-25 fade show"
            role="alert"
          >
            <strong>Password Does Not Match</strong>
            <button
              type="button"
              class="close"
              onClick={() => {
                this.setState({ PasswordDoesNotMatch: false });
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
   </div>    );
  }
}
