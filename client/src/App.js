import React, { Component } from "react";
import "./App.css";
import "./Home.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import PageNotFound from "./Page-Not-Found/PageNotFound";
import About from "./About/About";

import Home from "./Home";
import SignUpSoldiers from "./Sign-Up-Soldiers/SignUpSoldiers";
import SignUpFamily from "./Sign-Up-Family/SignUpFamily";
import MainNavBar from "./Main-Nav-bar/MainNavBar";
import FamilyNavBar from "./Family-Nav-Bar/FamilyNavBar";
import FamilyPage from "./Family-Page/FamilyPage";
import SoldiersPage from "./Soldiers-Page/SoldiersPage";
import Login from "./Login/Login";
import SoldierNavBar from "./Soldier-Nav-Bar/SoldierNavBar";
import HistoryFamily from "../src/Display-Family-History/HistoryFamily";
import HistoryPage from "./History-Page/HistoryPage";
import EditPageSoldier from "./Edit-Page-Soldier/EditPageSoldier";
import EditFamily from "./Edit-Family/EditFamily";
import Fooetr from "./Footer/Footer";

class App extends Component {
  state = { 
    ChangeNabBar : false , 
    falg : false , 
    authentication : "" , 
    renderSoldierHomePage : false 
  };
  UserRegister = arg => {
    this.setState({ ChangeNabBar: arg });
  };

  changeAuthentication = arg => {
    this.setState({ authentication: arg });
  };
renderSoldierHomePage = ()=>{
  this.setState({renderSoldierHomePage : true})
}
  renderSwitch(arg) {
    switch (arg) {
      case false:
        return <MainNavBar />;

      case "SoldierNavBar":
        return <SoldierNavBar UserRegister={this.UserRegister} renderSoldierHomePage = {this.renderSoldierHomePage}/>;

      case "FamilyNavBar":
        return <FamilyNavBar UserRegister={this.UserRegister}/>;
    }
  }

  renderAuthentication(arg) {
    switch (arg) {
      case "soldier":
        return <SoldiersPage UserRegister={this.UserRegister} />;

      case "family":
        return <FamilyPage UserRegister={this.UserRegister} />;

      default:
        return <Home UserRegister={this.UserRegister} />;
    }
  }

  renderAuthenticationSoldierOrFamilyPage(arg) {
    switch (arg) {
      case "soldier":
        return <SoldiersPage UserRegister={this.UserRegister} />;

      case "family":
        return <FamilyPage UserRegister={this.UserRegister} />;

      default:
        return <Home UserRegister={this.UserRegister} />;
      // return  "can't access only registered users s"
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className= {localStorage.user === "soldier"?"soldierApp":"App"}>
          {this.renderSwitch(this.state.ChangeNabBar)}
          <Switch>
           
            <Route
              exact
              path="/"
              render={() => this.renderAuthentication(localStorage.user)}
            />

            <Route
              exact
              path="/SignUpSoldiers"
              render={() => (
                <SignUpSoldiers
                  changeAuthentication={this.changeAuthentication}
                  UserRegister={this.UserRegister}
                />
              )}
            />

            <Route
              exact
              path="/SignUpFamily"
              render={() => {
                return (
                  <SignUpFamily
                    changeAuthentication={this.changeAuthentication}
                    UserRegister={this.UserRegister}
                  />
                );
              }}
            />

            <Route
              exact
              path="/FamilyPage"
              render={() =>
                this.renderAuthenticationSoldierOrFamilyPage(localStorage.user)
              }
            />

            <Route
              exact
              path="/SoldiersPage"
              render={() =>
                this.renderAuthenticationSoldierOrFamilyPage(localStorage.user)
              }
            />

            <Route
              exact
              path="/Login"
              render={() => {
                return (
                  <Login changeAuthentication={this.changeAuthentication} />
                );
              }}
            />

            <Route
              exact
              path="/history"
              render={() => {
                return <HistoryPage UserRegister={this.UserRegister}/>;
              }}
            />

            <Route
              exact
              path="/EditSoldier"
              render={() => {
                return <EditPageSoldier UserRegister = {this.UserRegister}/>;
              }}
            />
              
            <Route
              exact
              path="/EditFamily"
              render={() => {
                return <EditFamily UserRegister = {this.UserRegister}/>;
              }}
            />

            <Route
              exact
              path="/About"
              render={() => {
                return <About UserRegister = {this.UserRegister}/>;
              }}
            />

          </Switch> 
          {sessionStorage.page === "soldierHomePage" ? "" : <Fooetr/>}

        </div>       
      </BrowserRouter>
    );
  }
}
export default App;
