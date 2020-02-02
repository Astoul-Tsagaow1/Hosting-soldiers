import './Login.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'
export default class Login extends Component {
state = {flage:''}
renderSwitchLogin(arg){

switch (arg) {
    case true:
        return <Redirect to='/FamilyPage'  />
        
        case false:
            return <Redirect to="/SoldiersPage"/>
           

    default:
      return console.log("Login");
        
        
}


}

    render() {

        let email ,password;
        return (
            <div className="Login-Wrapper">
                {this.renderSwitchLogin(this.state.flage)}
          

             email : <input type="email"  onChange ={(e)=>{
              email = e.target.value

             }} />
            password : <input type="password" onChange = {(e)=>{

                password = e.target.value
            } } />

           <button onClick={()=>{
               let objUser = {Email:email,password:password};

               axios.post("/Login",objUser).then(res =>{
                   
               console.log(res, "this is the data");
                  
                console.log(res.status , "this is status");

             if (res.status === 205) {

                console.log(res.data);
                
                 
             }
                
                
                if (res.data === "Familys") {
                    console.log(res.data , "inside familys");

                    console.log(res.data);
                    
                    this.setState({flage:true})


                }
                else if (res.data === "soldiars") {
                    console.log(res.data , "inside soldiars");

                     console.log(res.data);
                    this.setState({flage:false})
                }

               }).catch(err=>{

                console.log("Errr");
                
               })


               

               


             
           }}>Login</button>
          
            
        </div>

        )
    }
}
