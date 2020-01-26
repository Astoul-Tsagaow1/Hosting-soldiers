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
import SoldiersPage from './SoldiersPage';

class App extends Component {

  state = { ChangeNabBar:false , falg:false ,CurrentFamilyEmail:" ",CurrentSoldiersEmail:""};
  UserRegister = (arg)=>{
   this.setState({ChangeNabBar:arg});
  }

  getCurrentEmail = (arg)=>{
     console.log(arg,'arg email');
     
    this.setState({CurrentFamilyEmail:arg})

  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
           {this.state.ChangeNabBar ? <FamilyNavBar/> :<NavBarBeforeRegistration />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUpSoldiers" render={() => (<SignUpSoldiers UserRegister={this.UserRegister} />)} />
            <Route exact path="/SignUpFamily" render={() => {return <SignUpFamily  UserRegister={this.UserRegister} getCurrentFamilyEmail={this.getCurrentEmail} /> }} />
            <Route exact path="/FamilyPage" render={() => {return <FamilyPage CurrentFamilyEmail={this.state.CurrentEmail} /> }} />
            <Route exact path="/SoldiersPage" render={() => {return <SoldiersPage /> }} />
            <Route exact component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;



