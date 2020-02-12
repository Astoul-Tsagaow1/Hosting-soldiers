import React, { Component } from "react";
import axios from "axios";
import './EditFamily.css'
import { Redirect } from "react-router-dom";
export default class SignUpFamily extends Component {
     
      state = { flag2: false ,  falg: false,falg3:false};
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
      hostingHistory:[]
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
      hostingHistory : this.state.hostingHistory
    };

    console.log(Familyobj, "family obj");
    console.log(Familyobj, "data");

    let ImgData = new FormData();
    // const config = { headers: { "content-type": "multipart/form-data" } };
     console.log(localStorage.email , "******** local Storage Email");
     
    ImgData.append("FamilyIMG", Familyobj.file);
    ImgData.append("familyname", Familyobj.familyname);
    ImgData.append("emailUpDate", localStorage.email);
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
          this.setState({ falg: true });

          
        } else {
          console.log(response.data, "is exsit");
        }

        if (response.status === 203) {
        this.setState({ flag2: true });

        }
      })
      .catch(err => {
        console.log("ERrrr");
        // this.setState({ flag2: true });
      });
  };

  render() {
    return (
      <div className="blurred-bg-container">
        {this.state.falg ? <Redirect to="/FamilyPage" /> : ""}
        {this.state.falg3 ? <Redirect to="/" /> : ""}

        <div className="content">
          <h1 className="Sign-up-FamilyPage">Edit page</h1>
          <form className="text" onSubmit={this.handleSubmit}>
            <div className="col-50 right-side-form">
              <label htmlFor="fname"> Family-Name : </label>
              <br />
              <input
                value={this.state.fname}
                name="fname"
                type="text"
                onChange={this.Hendelchange}
              />{" "}
              <br />
              <label htmlFor="email"> e-mail : </label>
              <br />
              <input
                value={this.state.femail}
                name="femail"
                type="email"
               
                onChange={this.Hendelchange}
              />{" "}
              <br />
              <label htmlFor="Phone-Number"> Phone-Number : </label>
              <br />
              <input
                value={this.state.fPhonNumber}
                name="fPhonNumber"
                id="Phone-Number"
                type="number"
               
                onChange={this.Hendelchange}
              />{" "}
              <br />
              <label htmlFor="City"> City : </label>
              <br />
              <input
                value={this.state.fCity}
                name="fCity"
                id="City"
                type="text"
               
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
              <br />
            </div>
            <div className="col-20 h-25 left-side-form">
              family photo :
              <input
                type="file"
                required
                name="imgf"
                className="file-input"
                onChange={e => {
                  this.setState({ file: e.target.files[0]});

                  console.log(this.state.file);
                }}
              ></input>{" "}
              <label htmlFor="NumberSoldiers">
                {" "}
                Number of soliders you can host :{" "}
              </label>
              <br />
              <input
                value={this.state.fNumberSoldiersHosts}
                name="fNumberSoldiersHosts"
                id="NumberSoldiers"
                type="number"
               
                onChange={this.Hendelchange}
              />{" "}
              <br />
              <label htmlFor="Password"> Password : </label>
              <br />
              <input
                value={this.state.fPassword}
                name="fPassword"
                type="Password"
                id="Password"
               
                onChange={this.Hendelchange}
              />{" "}
              <br />
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
              <br />
              <button
               
                type="submit"
                className="submitbutoon"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
          <button
               onClick={()=>{
                   let answer = window.confirm("you shur ? ");
                   if (answer === true) {

                    axios.delete(`/Delete/${localStorage.email}`)
                    .then(res =>{
                     console.log("Clear localstorege");
     
                     localStorage.clear();
                     if (res.status === 200) {
                     console.log("Befor redirect");
     
                     this.setState({ falg3: true });
                       
                     }
                     console.log("success");
                     
                    })
                    .catch(er=>{
     
                     console.log("err");
                     
                    })
                     
                   }
                   else{
                     console.log("stay with use ");
                     
                   }
                 

                   
      
           
               }}
               className="submitbutoon Delete-account"
             >
               {" "}
               Delete account{" "}
             </button>
          <br />
          <div className="blur"></div>
        </div>
        {this.state.flag2 ? (
          <div
            class="alert alert-danger alert-dismissible  h-25 w-25 fade show"
            role="alert"
          >
            <strong> Email is incorrect</strong>
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
