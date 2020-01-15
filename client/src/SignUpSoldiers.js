import React, { Component } from 'react'
import './SignUpSoldiers.css';
export default class SignUpSoldiers extends Component{
    render(){
        let name,lastName,age,quite,identityNumber,email,phone,password,confirmPassword,address,loneSoldier;

        return (
            <div className="warpFprPOsition">
                <div className="warpInputs">
    
                    <div className="personal-details">
                        <input className="personal-details-item inputs" type="text" placeholder="name" onChange = {(e)=>{
                           name = e.target.value;
                        }}></input>
                        <input className="personal-details-item inputs" type="text" placeholder="last name" onChange = {(e)=>{
                            lastName = e.target.value;
                        }}></input>
                        <input className="personal-details-item inputs" type="number" placeholder="age" onChange = {(e)=>{
                           age = e.target.value;
                        }}></input>
                    </div>
    
                    <div className="military">
                        <input className="military-item inputs" type="text" placeholder="quite" onChange = {(e)=>{
                            quite = e.target.value;
                        }}></input>
                        <input className="military-item inputs" type="number" placeholder="identity num" onChange = {(e)=>{
                            identityNumber = e.target.value;
                        }}></input>
                    </div>
    
                    <div className="contact-details">
                        <input className="contact-details-item inputs" type="email" placeholder="email" onChange = {(e)=>{
                            email = e.target.value;
                        }}></input>
                        <input className="contact-details-item inputs" type="number" placeholder="phone" onChange = {(e)=>{
                            phone = e.target.value;
                        }}></input>
                    </div>
    
                    <div className="passwords" >
                        <input className="password-item inputs" type="password" placeholder="password" onChange = {(e)=>{
                            password = e.target.value;
                        }}></input>
                        <input className="password-item inputs" type="password" placeholder="Confpassword" onChange = {(e)=>{
                            confirmPassword = e.target.value;
                        }}></input>
                    </div>
    
                    <div className="warpAddress">
                        <input className="Address inputs" type="text" placeholder="address" onChange = {(e)=>{
                            address = e.target.value;
                        }}></input>
                    </div>
    
                    <div>
                        Lone soldier:<input className=" inputs" type="checkbox" ></input>
                    </div>
                      
                    <div className = "warpButton">
                       <button onClick = {()=>{
                           if(password == confirmPassword){
                            this.props.sendSoldierInfo(name,lastName,age,quite,identityNumber,email,phone,password,address,loneSoldier);   
                           }
                           else{
                            console.log('Password not same!');
                           }
                       }} id = "button">send</button>
                    </div>
    
                    {/* warp all inputs */}
                </div>
                {/* warp for position */}
            </div>
        )
    }
    
}