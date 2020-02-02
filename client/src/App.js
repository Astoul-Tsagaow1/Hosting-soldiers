import React, { Component } from 'react';
import './App.css';
import './Home.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './Page-Not-Found/PageNotFound'
import Home from './Home'
import SignUpSoldiers from './Sign-Up-Soldiers/SignUpSoldiers'
import SignUpFamily from './Sign-Up-Family/SignUpFamily'
import NavBarBeforeRegistration from './Nav-bar/Navbar'
import FamilyNavBar from './Family-Nav-Bar/FamilyNavBar'
import FamilyPage from './Family-Page/FamilyPage'
import SoldiersPage from './Soldiers-Page/SoldiersPage';

class App extends Component {

  state = { ChangeNabBar:false , falg:false};
  UserRegister = (arg)=>{
   this.setState({ChangeNabBar:arg});
  }
 
  renderSwitch(){
    switch (this.state.ChangeNabBar) {
      case false:
       <NavBarBeforeRegistration />
        break;
        case 'soldierNav':
         <FamilyNavBar/>
         break;
         case 'FamilyNav':
           <FamilyNavBar/>
        break;
    }
  }

  render() {
   
    return (
      <BrowserRouter>
        <div className="App">
             
           
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUpSoldiers" render={() => (<SignUpSoldiers UserRegister={this.UserRegister} />)} />
            <Route exact path="/SignUpFamily" render={() => {return <SignUpFamily  UserRegister={this.UserRegister} /> }} />
            <Route exact path="/FamilyPage" render={() => {return <FamilyPage UserRegister={this.UserRegister}/> }} />
            <Route exact path="/SoldiersPage" render={() => {return <SoldiersPage UserRegister={this.UserRegister}/> }} />
            <Route exact component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>    );
  }
}
export default App;



