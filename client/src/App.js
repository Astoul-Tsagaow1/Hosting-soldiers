import React, { Component } from 'react';
import './App.css';
import './Home.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound'
import Home from './Home'
import SignUpSoldiers from './SignUpSoldiers'
import SignUpFamily from './SignUpFamily'
import NavBarBeforeRegistration from './Navbar'
import FamilyNavBar from './FamilyNavBar'
import FamilyPage from './FamilyPage'

class App extends Component {

  state = { ChangeNabBar:false , falg:false };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
           {this.state.ChangeNabBar ? <FamilyNavBar/> :<NavBarBeforeRegistration />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUpSoldiers" render={() => (<SignUpSoldiers sendSoldierInfo={this.newSoldier} />)} />
            <Route exact path="/SignUpFamily" render={() => {return <SignUpFamily  UserRegister={this.UserRegister}/> }} />
            <Route exact path="/FamilyPage" render={() => {return <FamilyPage /> }} />
            <Route exact component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;



