import React, { Component } from 'react';

import './SignUpFamily.css'

export default class SignUpFamily extends Component {

   
render() {
 let fname, femail, fPhonNumber, fNumberSoldiersHosts, fPassword, fCity, FamilyDescription;
    return (
        <div>
            <form className="SignUp-Family-Form">

                <h1>Family Form</h1>
                <label for="fname"> Family-Name :</label><br />
                <input id="fname" type="text" required="required" onChange={(e) => {

                    fname = e.target.value


                }} /> <br />
                <label for="email">  e-mail  :</label><br />
                <input id="email" type="email" required="required" onChange={(e) => {

                    femail = e.target.value


                }} /> <br />
                <label for="Phone-Number">  Phone-Number  :</label><br />
                <input id="Phone-Number" type="number" required="required" onChange={(e) => {

                    fPhonNumber = e.target.value


                }} /> <br />
                <label for="City"> City :</label><br />
                <input id="City" type="text" required="required" onChange={(e) => {

                    fCity = e.target.value


                }} /> <br />
                <label for="NumberSoldiers">  Number of soliders you can host :</label><br />
                <input id="NumberSoldiers" type="number" required="required" onChange={(e) => {

                    fNumberSoldiersHosts = e.target.value


                }} /> <br />

                <label for="Password">   Password :</label><br />
                <input type="Password" id="Password" required="required" onChange={(e) => {

                    fPassword = e.target.value


                }} /> <br />
                <label for="Password">   Password :</label><br />
                <input type="Password" id="Password" required="required" /> <br />


                <textarea id="Family-Description" name="Family_Description" placeholder="About the family.." Style="height:200px" onChange={(e) => {

                    FamilyDescription = e.target.value


                }}></textarea><br />
                <button required="required" onClick={() => {

                  this.props.add(fname, femail, fPhonNumber, fNumberSoldiersHosts, fPassword, fCity, FamilyDescription);

                }} > Submit </button>

            </form>
        </div>
    )

}
}

//             <form>
//   <label for="fname">First Name</label>
//   <input type="text" id="fname" name="fname" value="John">
//   <label for="lname">Last Name</label>
//   <input type="text" id="lname" name="lname" value="Doe">
// </form>
