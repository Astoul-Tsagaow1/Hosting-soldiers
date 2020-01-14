import React, { Component } from 'react';
import './App.css';
import './Home.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound'
import Home from './Home'
// import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import SignUpSoldiers from './SignUpSoldiers'
// import Navbar from 'react-bootstrap/Navbar'
class App extends Component {
 
  state = { soldier: '' };
  
  newSoldier = (nameArg,lastNameArg,ageArg,quiteArg,identityNumberArg,emailArg,phoneArg,passwordArg,addressArg,loneSoldierArg) =>{
    let ojbSoldiers = {
                       name:nameArg , lastName:lastNameArg , age:ageArg , quite:quiteArg , identityNumber:identityNumberArg ,
                       email:emailArg , phone:phoneArg , password:passwordArg , address:addressArg , loneSoldier:loneSoldierArg
                      }
      this.setState({soldier:ojbSoldiers});
      console.log(this.state.soldier,"now");
  }
 
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
          {/* <h2>Hello World</h2>
          <button onClick={this.clickHandler}>Click Me</button>
          <p>{this.state.data}</p> */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src="https://img.icons8.com/color/48/000000/camo-cream.png(2 kB)
https://img.icons8.com/color/48/000000/camo-cream.png
"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
              <Nav.Link  href="/">Home</Nav.Link>
              <Nav.Link href="/SignUpSoldiers">SignUp Soldiers</Nav.Link>
              <Nav.Link href="/x">SignUp Family</Nav.Link>
              <Nav.Link href="/x">Login</Nav.Link>
              <Nav.Link href="/x">About</Nav.Link>
            </Nav>
          </Navbar>
          <div className="Links">
            {/* <Link to='/'>Home|</Link>
            <Link to='/SignUp'>SignUp Soldiers|</Link>
            <Link to='/SignUp'>SignUp Family|</Link>
            <Link to='/Login'>Login|</Link>
            <Link to='/About'>About|</Link> */}
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUpSoldiers"   render={() => (<SignUpSoldiers sendSoldierInfo = {this.newSoldier}/>)} />
                                                      {/* render = {()=>(<AddBook handelAddBook = {this.addbookfunc}/>)}/> */}
            <Route exact  component={PageNotFound} />
            <Route exact  component={PageNotFound} />
            <Route exact  component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;



