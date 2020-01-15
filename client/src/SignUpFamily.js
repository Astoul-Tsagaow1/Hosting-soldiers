import React, { Component } from 'react';

import './SignUpFamily.css'

export default class SignUpFamily extends Component {
    state ={}

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
           

        }
        this.Hendelchange = this.Hendelchange.bind(this)
    }

    Hendelchange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    


    render() {

        return (
            <div>
                <form className="SignUp-Family-htmlForm" onSubmit={this.props.send}>

                    <h1>Family Form</h1>
                    <label htmlFor="fname"> Family-Name :
                    <input value={this.state.fname} name="fname"  type="text" required="required" onChange={this.Hendelchange} /> <br />
                    </label><br />

                    <label htmlFor="email">  e-mail  :
                    <input value={this.state.femail} name="email" id="email" type="email" onChange={this.Hendelchange} /> <br />
                    </label><br />

                    <label htmlFor="Phone-Number">  Phone-Number  :
                    <input value={this.state.fPhonNumber} name="fPhonNumber" id="Phone-Number" type="number" required="required" onChange={this.Hendelchange} /> <br />
                    </label><br />

                    <label htmlFor="City"> City :
                    <input value={this.state.fCity} name="fCity" id="City" type="text" required="required" onChange={this.Hendelchange} /> <br />
                    </label><br />

                    <label htmlFor="NumberSoldiers">  Number of soliders you can host :
                    <input value={this.state.fNumberSoldiersHosts} name="fNumberSoldiersHosts" id="NumberSoldiers" type="number" required="required" onChange={this.Hendelchange} /> <br />
                    </label><br />

                    <label htmlFor="Password">   Password :
                    <input value={this.state.fPassword} name="fPassword" type="Password" id="Password" required="required" onChange={this.Hendelchange} /> <br />
                    </label><br />

                    <label htmlFor=" ConfirmePassword ">  Confirme - Password :
                    <input value={this.state.ConfirmePassword} name="ConfirmePassword" type="Password" id="ConfirmePassword" required="required" onChange={this.Hendelchange} /> <br />
                    </label><br />


                    <textarea value={this.state.FamilyDescriptionvlue} name="FamilyDescription" id="Family-Description" name="Family_Description" placeholder="About the family.." onChange={this.Hendelchange}></textarea><br />

                    <button required="required" type="submit"  > Submit </button>

                </form>
            </div>
        )

    }
}


