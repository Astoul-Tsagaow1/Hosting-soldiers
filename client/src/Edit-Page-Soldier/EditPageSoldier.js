import React, { Component } from "react";
import "./EditPageSoldier.css";

export default class EditPageSoldier extends Component {
  render() {
    return (
      <div className="warpFormEdit">
        <form className="formEdit">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Name"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Last name</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Last name"
              />
            </div>
            <div class="form-group warpEmail">
              <label for="inputAddress2">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputAddress2"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">password</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Confrim Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Phone</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">quite</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Lone soldier:
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
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
