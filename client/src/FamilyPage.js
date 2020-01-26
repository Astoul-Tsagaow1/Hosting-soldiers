
import React from 'react'
import './FamilyPage.css'
import axios from 'axios';


export default function FamilyPage(props) {
    console.log("Family page");
    console.log(props.CurrentFamilyEmail,"Current Email");
    
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
       

      const datefamily = {fromDate:from , untilDate :Until , CurrentEmail:localStorage.email}
       axios.post("/datefamily" ,datefamily ).then(res =>{
          
        console.log(res,"this is response");
        
       })
    

      


      
  }}>Click to send ditails</button>
  </div>
    )
}

