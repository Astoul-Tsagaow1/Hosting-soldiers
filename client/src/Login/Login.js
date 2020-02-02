import './Login.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'
export default class Login extends Component {
state = {flage:false}

    render() {

        let email ,password;
        return (
            <div className="Login-Wrapper">
                {this.state.flage ? <Redirect to='/FamilyPage'  /> : ""}

             email : <input type="email"  onChange ={(e)=>{
              email = e.target.value

             }} />
            password : <input type="password" onChange = {(e)=>{

                password = e.target.value
            } } />

           <button onClick={()=>{
               let objUser = {Email:email,password:password};

               axios.post("/Login",objUser).then(res =>{

                
                if (res.status === 201) {
                    
                    this.setState({flage:true})
                }
                

               })


               

               console.log(objUser);
               


             
           }}>Login</button>
          
            
        </div>

        )
    }
}
