import React from 'react'
import './SignUpSoldiers.css';
export default function SignUpSoldiers() {
    return (
        <div className="warpFprPOsition">
            <div className="warpInputs">
                <div className="personal-details">
                    <input className="personal-details-item inputs" type="text" placeholder="Enter name"></input>
                    <input className="personal-details-item inputs" type="text" placeholder="Enter last name"></input>
                    <input className="personal-details-item inputs" type="number" placeholder="Enter age"></input>
                </div>

                <div className="military">
                    <input className="military-item inputs" type="text" placeholder="Enter quite"></input>
                    <input className="military-item inputs" type="number" placeholder="Enter numberZ"></input>
                </div>

                <div className="contact-details">
                    <input className="contact-details-item inputs" type="email" placeholder="Enter email"></input>
                    <input className="contact-details-item inputs" type="number" placeholder="Enter phone"></input>
                </div>


                <div className="passwords" >
                    <input className="password-item inputs" type="password" placeholder="Enter password"></input>
                    <input className="password-item inputs" type="password" placeholder="Enter password"></input>
                </div>

                <div className="warpAddress">
                    <input className="Address inputs" type="text" placeholder="Insert address"></input>
                </div>

                <div>
                    Lone soldier:<input className=" inputs" type="checkbox"></input>
                </div>

            </div>
        </div>

    )
}
