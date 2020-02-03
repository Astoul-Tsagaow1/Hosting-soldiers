import React, { Component } from "react";
import "./App.css";
import "./Home.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./Page-Not-Found/PageNotFound";
import Home from "./Home";
import SignUpSoldiers from "./Sign-Up-Soldiers/SignUpSoldiers";
import SignUpFamily from "./Sign-Up-Family/SignUpFamily";
import MainNavBar from "./Main-Nav-bar/MainNavBar";
import FamilyNavBar from "./Family-Nav-Bar/FamilyNavBar";
import FamilyPage from "./Family-Page/FamilyPage";
import SoldiersPage from "./Soldiers-Page/SoldiersPage";
import Login from "./Login/Login";
import SoldierNavBar from "./Soldier-Nav-Bar/SoldierNavBar";

class App extends Component {
  state = { ChangeNabBar: false, falg: false, authentication: "" };
  UserRegister = arg => {
    this.setState({ ChangeNabBar: arg });
  };

  changeAuthentication = arg => {
    this.setState({ authentication: arg });
  };

  renderSwitch(arg) {
    switch (arg) {
      case false:
        return <MainNavBar />;

      case "SoldierNavBar":
        return <SoldierNavBar />;

      case "FamilyNavBar":
        return <FamilyNavBar />;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.renderSwitch(this.state.ChangeNabBar)}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home UserRegister={this.UserRegister} />}
            />
            <Route
              exact
              path="/SignUpSoldiers"
              render={() => <SignUpSoldiers UserRegister={this.UserRegister} />}
            />
            <Route
              exact
              path="/SignUpFamily"
              render={() => {
                return <SignUpFamily UserRegister={this.UserRegister} />;
              }}
            />
            <Route
              exact
              path="/FamilyPage"
              render={() => {
                return this.state.authentication == "family" ? (
                  <FamilyPage UserRegister={this.UserRegister} />
                ) : (
                  "can't access only registered families"
                );
              }}
            />
            <Route
              exact
              path="/SoldiersPage"
              render={() => {
                return this.state.authentication == "soldier" ? (
                  <SoldiersPage UserRegister={this.UserRegister} />
                ) : (
                  "can't access only registered soldiers"
                );
              }}
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
