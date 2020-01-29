
import './FamilyPage.css'
import axios from 'axios';

import React, { Component } from 'react';


    
    
  


export default class FamilyPage extends Component { 
 state ={flage:false}

    
  render() {  
    console.log("Family page");
     let from;
    let Until;
    return (
    
  
      <div className="Family-Page">

      <h1> Welcome to Family page </h1>   
       
        when you can host from ?  <input type="date" onChange={(e)=>{
      
      from =e.target.value;
        }}/> 
      
      Until ?  <input type="date" onChange={(e)=>{
      
      Until =e.target.value;
      }}/> 
      
        <button onClick={()=>{
             console.log(from , "from"); 
             console.log(Until , "until"); 
             console.log(localStorage.email , "current Email");
             
      
            const datefamily = {fromDate:from , untilDate :Until , CurrentEmail:localStorage.email};


             axios.post("/datefamily" ,datefamily ).then(res =>{

              console.log(res.status,"this is response");

              // if (res.status === 201) {

              // this.setState({flage: true})
                
              // }
              // else{

              //   console.log("else");
                
              // }
                
              // console.log(res.status,"this is response");

              
             }).catch(errr=>{

              console.log(errr);
              
             })
             console.log("after axios");
             
        }}>Click to send ditails</button>

       {this.state.flage ? <h1>"ffdgdfgdg"</h1> :""}

        </div>
    )
  }
}
