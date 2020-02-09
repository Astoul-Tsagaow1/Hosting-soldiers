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
import Footer from './Footer/Footer';

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

  renderAuthentication(arg) {
    switch (arg) {
  
      case "soldier":
         return <SoldiersPage UserRegister={this.UserRegister} />;

      case "family":
        return <FamilyPage UserRegister={this.UserRegister} />;

      default :
        return  <Home UserRegister={this.UserRegister} />;
    }
  }

  renderAuthenticationSolFamPage(arg) {
    switch (arg) {
  
      case "soldier":
         return <SoldiersPage UserRegister={this.UserRegister} />;

      case "family":
        return <FamilyPage UserRegister={this.UserRegister} />;

      default :
      return  <Home UserRegister={this.UserRegister} />;
        // return  "can't access only registered users s"
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.renderSwitch(this.state.ChangeNabBar)}
          <Switch>

          {/* <Route
              exact
              path="/logout"
              render={() => <Home UserRegister={this.UserRegister} />}
            /> */}

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
              render={() => this.renderAuthenticationSolFamPage(localStorage.user)}
            />
            <Route
              exact
              path="/SoldiersPage"
              render={() => this.renderAuthenticationSolFamPage(localStorage.user)}
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
        {/* <div className = "footer1">
                    <Footer/>
                </div> */}
      </BrowserRouter>

    );
  }
}
export default App;
