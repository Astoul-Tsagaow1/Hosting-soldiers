import React, { Component } from 'react';

import AstoulImage from '../images/Astoul-Tsagaow.jpg'
import ShayImage from '../images/Shay-bicha.jpeg'


export default class About extends Component{
  render(){
    return (
      <div>
        <div class="bg-light py-5">
<div class="container py-5">
  <div class="row mb-4">
    <div class="col-lg-5">
      <h2 class="display-4 font-weight-light">Our Goal</h2>
      <p class="font-italic text-muted">Our goal is to establish a link between families and soldiers when served in the army we saw that a connection between families and soldiers has a lot of its own,We have established a site that will allow lone soldiers and host families to simply set dates and stay </p>
    </div>
  </div>
</div>
</div>
<div class="bg-white py-5">
<div class="container py-5">
  <div class="row align-items-center mb-5">
    <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
      <h2 class="font-weight-light">Astoul Tsagaow</h2>
      <p class="font-italic text-muted mb-4">Full Stack developer Graduate of Web Development course, Technology Enrichment Center (Tech-Career) ,In the Army I served in the Paratroopers Brigade</p><a href="https://github.com/Astoul-Tsagaow1" target="_blank" class="btn btn-light px-5 rounded-pill shadow-sm">GitHub</a>
    </div>
    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={AstoulImage} class="img-fluid mb-4 mb-lg-0"/></div>
  </div>
  <div class="row align-items-center">
    <div class="col-lg-5 px-5 mx-auto"><img src={ShayImage} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
      <h2 class="font-weight-light">Shay Bicha</h2>
      <p class="font-italic text-muted mb-4">Full Stack developer Graduate of Web Development course, Technology Enrichment Center (Tech-Career) ,In the Army I served in the Paratroopers Brigade</p><a href="https://github.com/Shay-bicha" target="_blank" class="btn btn-light px-5 rounded-pill shadow-sm">GitHub</a>
    </div>
  </div>
</div>
</div>
     
   </div>
  )
 
  }
    componentDidMount(){
    let userNavBar;
    let user = localStorage.user;
    if(user != undefined){
      (user === "soldier") ? userNavBar = "SoldierNavBar" : userNavBar = "FamilyNavBar";
    }
    else{
       userNavBar = false;
    }
       this.props.UserRegister(userNavBar);
    }
}
