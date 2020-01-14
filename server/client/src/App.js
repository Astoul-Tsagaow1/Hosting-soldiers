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

  state = { soldier: '' , family: [] };

  newSoldier = (nameArg, lastNameArg, ageArg, quiteArg, identityNumberArg, emailArg, phoneArg, passwordArg, addressArg, loneSoldierArg) => {
    let ojbSoldiers = {
      name: nameArg, lastName: lastNameArg, age: ageArg, quite: quiteArg, identityNumber: identityNumberArg,
      email: emailArg, phone: phoneArg, password: passwordArg, address: addressArg, loneSoldier: loneSoldierArg
    }
    this.setState({ soldier: ojbSoldiers });
    console.log(this.state.soldier, "now");
  }

  NewFamily = (FamilyNameArg, EmailArg, PhoneNumberArg, CityArg, NumberSoldersHostArg, PasswordArg, AboutFamilyArg) => {
    alert("NewFamily")
    let NEwfamilyobj = {
      FamilyName: FamilyNameArg, Email: EmailArg, PhoneNumber: PhoneNumberArg, City: CityArg
      , NumberSoldersHost: NumberSoldersHostArg, Password: PasswordArg, AboutFamily: AboutFamilyArg
    };

    this.setState({ family: NEwfamilyobj })
    console.log(this.state.family);

  }

  render() {
    
    return (
      <BrowserRouter>
        <div className="App">

          <NavbaR />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUpSoldiers" render={() => (<SignUpSoldiers sendSoldierInfo={this.newSoldier} />)} />
            <Route exact path="/SignUpFamily" render={() => {return <SignUpFamily add={this.NewFamily} /> }} />
            <Route exact component={PageNotFound} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;



