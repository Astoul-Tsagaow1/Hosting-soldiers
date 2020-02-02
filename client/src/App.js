import React, { Component } from 'react';
import './App.css';
import './Home.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './Page-Not-Found/PageNotFound'
import Home from './Home'
import SignUpSoldiers from './Sign-Up-Soldiers/SignUpSoldiers'
import SignUpFamily from './Sign-Up-Family/SignUpFamily'
import MainNavBar from './Main-Nav-bar/MainNavBar'
import FamilyNavBar from './Family-Nav-Bar/FamilyNavBar'
import FamilyPage from './Family-Page/FamilyPage'
import SoldiersPage from './Soldiers-Page/SoldiersPage';
import Login from './Login/Login'
import SoldierNavBar from './Soldier-Nav-Bar/SoldierNavBar';

class App extends Component {

  state = { ChangeNabBar:false , falg:false};
  UserRegister = (arg)=>{
   this.setState({ChangeNabBar:arg});
  }
 
  renderSwitch(arg){
    switch (arg) {
      
      case false:
         return <MainNavBar/>
      
        case 'SoldierNavBar':
          return <SoldierNavBar/>
  
         case 'FamilyNav':
          return <FamilyNavBar/>
      
    }
  }

  render() {
   
    return (
      <BrowserRouter>
        <div className="App"> 
           {this.renderSwitch(this.state.ChangeNabBar)}
          <Switch>
            <Route exact path="/" render={() => (<Home UserRegister={this.UserRegister} />)} /> />
            <Route exact path="/SignUpSoldiers" render={() => (<SignUpSoldiers UserRegister={this.UserRegister} />)} />
            <Route exact path="/SignUpFamily" render={() => {return <SignUpFamily  UserRegister={this.UserRegister} /> }} />
            <Route exact path="/FamilyPage" render={() => {return <FamilyPage UserRegister={this.UserRegister}/> }} />
            <Route exact path="/SoldiersPage" render={() => {return <SoldiersPage UserRegister={this.UserRegister}/> }} />
            <Route exact path="/FamilyPage" render={() => {return <FamilyPage/> }} />
            <Route exact path="/SoldiersPage" render={() => {return <SoldiersPage /> }} />
            <Route exact path="/Login" render={() => {return <Login /> }} />
          </Switch>
        </div>
      </BrowserRouter>    );
  }
}
export default App;



