import React, { Component } from "react";
import axios from "axios";
import "./SignUpFamily.css";
import { Redirect } from "react-router-dom";

export default class SignUpFamily extends Component {
  state = { flag2: false };
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
      falg: true,
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

    console.log(Familyobj, "family obj");

    localStorage.setItem("email", this.state.femail);
    localStorage.setItem("name", this.state.fname);
    localStorage.setItem("image", "familyPhoto" + this.state.file.name);
    localStorage.setItem("user", "family");

    console.log(Familyobj, "data");

    let ImgData = new FormData();
    // const config = { headers: { "content-type": "multipart/form-data" } };

    ImgData.append("FamilyIMG", Familyobj.file);
    ImgData.append("familyname", Familyobj.familyname);
    ImgData.append("email", Familyobj.email);
    ImgData.append("PhonNumber", Familyobj.familyPhonNumber);
    ImgData.append("NumberSoldiersHosts", Familyobj.familyNumberSoldiersHosts);
    ImgData.append("Password", Familyobj.familyPassword);
    ImgData.append("ConfirmePassword", Familyobj.familyConfirmePassword);
    ImgData.append("familyCity", Familyobj.familyCity);
    ImgData.append("fromDate", Familyobj.fromDate);
    ImgData.append("untilDate", Familyobj.untilDate);
    ImgData.append("discriptionFamily", Familyobj.FamilyDescriptionvlue);
    ImgData.append("hostingHistory", Familyobj.hostingHistory);

    axios
      .post("/family", ImgData)
      .then(response => {
        alert("family");
        console.log(response.status, "inside axios");

        if (response.status === 201) {
          console.log(response.data, "welcome to your login page");
          this.props.UserRegister(true);
          this.setState({ flage: "FamilyPage" });

          console.log("before redirect");
        } else {
          console.log(response.data.email, "is exsit");
        }

        if (response.status === 400) {
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ flag2: true });
      });
  };
  render() {
    return (
      <div className="blurred-bg-container">
        {this.state.flage ? <Redirect to="/FamilyPage" /> : ""}

        <div className="content">
          <h1 className="Sign-up-FamilyPage">Sign up</h1>
          <form className="text" onSubmit={this.handleSubmit}>
            <div className="col-50 right-side-form">
              <input
                value={this.state.fname}
                name="fname"
                type="text"
                required="required"
                onChange={this.Hendelchange}
                placeholder="Family-Name "
              />{" "}
              <br />
              <input
                value={this.state.femail}
                name="femail"
                type="email"
                required="required"
                onChange={this.Hendelchange}
                placeholder="Email"
              />{" "}
              <br />
              <input
                value={this.state.fPhonNumber}
                name="fPhonNumber"
                id="Phone-Number"
                type="number"
                required="required"
                placeholder="Phone-Number"
                onChange={this.Hendelchange}
              />{" "}
              <br />
              <input
                value={this.state.fCity}
                name="fCity"
                id="City"
                type="text"
                required="required"
                placeholder="City"
                onChange={this.Hendelchange}
              />{" "}
              <br />
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
            <div className="left-side-form">
              
                <input
                  type="file"
                  required
                  name="imgf"
                  className="file-input"
                  placeholder=""
                  onChange={e => {
                    this.setState({ file: e.target.files[0] });

                    console.log(this.state.file);
                  }}
                ></input>{" "}
                {" "}
                <input
                  value={this.state.fNumberSoldiersHosts}
                  name="fNumberSoldiersHosts"
                  id="NumberSoldiers"
                  type="number"
                  required="required"
                  onChange={this.Hendelchange}
                  placeholder="Number Soldiers You can host"
                />{" "}

                <input
                  value={this.state.fPassword}
                  name="fPassword"
                  type="Password"
                  id="Password"
                  placeholder="Password"
                  required="required"
                  onChange={this.Hendelchange}
                />{" "}
                <input
                  value={this.state.ConfirmePassword}
                  name="ConfirmePassword"
                  type="Password"
                  id="ConfirmePassword"
                  required="required"
                  placeholder="ConfirmePassword"
                  onChange={this.Hendelchange}
                />{" "}
              <button
                required="required"
                type="submit"
                className="submitbutoon"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>

          <br />
          {/* </div> */}
          <div className="blur"></div>
        </div>
        {this.state.flag2 ? (
          <div
            class="alert alert-danger alert-dismissible  h-25 w-25 fade show"
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
      </div>
    );
  }
}
