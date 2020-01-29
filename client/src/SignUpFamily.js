import React, { Component } from 'react';
import axios from 'axios';
import './SignUpFamily.css';
import { Redirect } from 'react-router-dom'

// import { Redirect } from 'react-router-dom'
export default class SignUpFamily extends Component {
    state = {}
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            femail: "",
            fPhonNumber: "",
            fNumberSoldiersHosts: "",
            fPassword: "",
            ConfirmePassword: "",
            FamilyDescriptionvlue: "",
            fCity: "",
            falg : true,
            fromDate:"",
            untilDate:""
        }
        this.Hendelchange = this.Hendelchange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    Hendelchange(e) { 
        this.setState({
            [e.target.name]: e.target.value
        })
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
            fromDate:this.state.fromDate,
            untilDate:this.state.untilDate
        }

        localStorage.setItem('email', this.state.femail);
        axios.post('/family', { Familyobj })
            .then(response => {
                alert("family")
                if (response.status == 201) {
                    console.log(response.data, "welcome to your login page");
                    this.props.UserRegister(true);
                    this.setState({flage:'FamilyPage'});

                    console.log("before redirect");

                }
                else {
                    console.log(response.data.email, "is exsit");

                }

            })
            .catch(err => {

                console.log(err);

            })
    }
    render() {
        return (
            <div className="blurred-bg-container">
                {this.state.flage ? <Redirect to='/FamilyPage'  /> : ""}
                <div className="content">
                  
                    <div className="text">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-50">
                                    <h1>Family Form</h1>
                                    <label htmlFor="fname"> Family-Name : </label><br />
                 <input value={this.state.fname} name="fname" type="text" required="required" onChange={this.Hendelchange} /> <br />
                                   
                                    <label htmlFor="email">  e-mail  :  </label><br />
                 <input value={this.state.femail} name="femail" type="email" required="required" onChange={this.Hendelchange} /> <br />
                                  
                                    <label htmlFor="Phone-Number">  Phone-Number  :     </label><br />
                 <input value={this.state.fPhonNumber} name="fPhonNumber" id="Phone-Number" type="number" required="required" onChange={this.Hendelchange} /> <br />
                               
                                    <label htmlFor="City"> City :   </label><br />
                 <input value={this.state.fCity} name="fCity" id="City" type="text" required="required" onChange={this.Hendelchange} /> <br />
                                 
                                </div>
                                <div className="col-50">
                                    <h1>Family Form</h1>
                                    <label htmlFor="NumberSoldiers">  Number of soliders you can host :  </label><br />
                   <input value={this.state.fNumberSoldiersHosts} name="fNumberSoldiersHosts" id="NumberSoldiers" type="number" required="required" onChange={this.Hendelchange} /> <br />
                                  
                                    <label htmlFor="Password">   Password : </label><br />
                   <input value={this.state.fPassword} name="fPassword" type="Password" id="Password" required="required" onChange={this.Hendelchange} /> <br />
                                   
                                    <label htmlFor=" ConfirmePassword ">  Confirme - Password :  </label><br />
                   <input value={this.state.ConfirmePassword} name="ConfirmePassword" type="Password" id="ConfirmePassword" required="required" onChange={this.Hendelchange} /> <br />
                                  
                                    {/* <textarea value={this.state.FamilyDescriptionvlue} name="FamilyDescription" id="Family-Description" name="Family_Description" placeholder="About the family.." onChange={this.Hendelchange}></textarea><br /> */}
                                    <button required="required" type="submit"  > Submit </button>
                                    
                                    {/* <div class="row">
                                        <div class="col-50">
                                            <label for="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                        </div>
                                        <div class="col-50">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </form>

                    </div>
<div className="blur"></div>
                </div>
            </div>
        )
    }
}