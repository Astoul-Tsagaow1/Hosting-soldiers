import React, { Component } from "react";
import "./EditPageSoldier.css";

export default class EditPageSoldier extends Component {
  render() {
    return (
      <div className="warpFormEdit">
        <form className="formEdit">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputLastName">Last name</label>
              <input
                type="text"
                class="form-control"
                id="inputLastName"
                placeholder="Last name"
              />
            </div>
            <div class="form-group warpEmail">
              <label for="inputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword">password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputConfrimPassword">Confrim Password</label>
              <input
                type="password"
                class="form-control"
                id="inputConfrimPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputPhone">Phone</label>
            <input
              type="number"
              class="form-control"
              id="inputPhone"
              placeholder="Phone"
            />
          </div>
          <div class="form-group">
            <label for="inputquite">Quite</label>
            <input
              type="text"
              class="form-control"
              id="inputquite"
              placeholder="Quite"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>

            <div className ="warpCheckBox">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Lone soldier:
              </label>
              </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              
            </div>
          </div>
          <button 
          type="submit" 
          class="btn btn-primary"
          id = "editButton"
          >
            Edit account
          </button>
        </form>
        <button 
        className = "btn btn-danger"
        id = "deleteButton"
        >
            Delete accuont
        </button>
      </div>
    );
  }
  componentDidMount() {
    let user = localStorage.user;
    let userNavBar;
    user === "soldier"
      ? (userNavBar = "SoldierNavBar")
      : (userNavBar = "FamilyNavBar");
    this.props.UserRegister(userNavBar);
  }
}
