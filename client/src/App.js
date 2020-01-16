import React, { Component } from 'react';
import './App.css';
import './Home.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound'
import Home from './Home'
import SignUpSoldiers from './SignUpSoldiers'
import SignUpFamily from './SignUpFamily'
import NavbaR from './Navbar'

class App extends Component {

  state = { soldier: {} , family: [] , reqSoldiers:false , reqFamily:false , post:false };
  obj = {name:"astoul"}

  // newSoldier = (nameArg, lastNameArg, ageArg, quiteArg, identityNumberArg, emailArg, phoneArg, passwordArg, addressArg, loneSoldierArg) => {
  //   let ojbSoldiers = {
  //     name: nameArg, lastName: lastNameArg, age: Number(ageArg), quite: quiteArg, identityNumber: Number(identityNumberArg),
  //     email: emailArg, phone: Number(phoneArg), password: passwordArg, address: addressArg, loneSoldier: loneSoldierArg
  //   }
  //   this.setState({ soldier: ojbSoldiers , reqSoldiers:true});
  // }
  
 
  // NewFamily = (FamilyNameArg, EmailArg, PhoneNumberArg, CityArg, NumberSoldersHostArg, PasswordArg, AboutFamilyArg) => {

  //   let NEwfamilyobj = {
  //     FamilyName: FamilyNameArg, Email: EmailArg, PhoneNumber: PhoneNumberArg, City: CityArg
  //     , NumberSoldersHost: NumberSoldersHostArg, Password: PasswordArg, AboutFamily: AboutFamilyArg
  //   };
  //   // alert(NEwfamilyobj)
  //    this.setState({ family: NEwfamilyobj ,reqFamily: true,post:true})
  // }


  
  handleSubmit = event => {
    event.preventDefault();
 

    console.log(event);
    
   
  }





  render() {

    if(this.state.reqSoldiers){
      axios.post('/soldier',this.state.soldier)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
   
    return (
      <BrowserRouter>
        <div className="App">

          <NavbaR />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUpSoldiers" render={() => (<SignUpSoldiers sendSoldierInfo={this.newSoldier} />)} />
            <Route exact path="/SignUpFamily" render={() => {return <SignUpFamily add={this.NewFamily}  send={this.handleSubmit}/> }} />
            <Route exact component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;



