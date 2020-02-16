import React from 'react'
import "./GuidelinesForContactingTheHostamily.css";
export default function GuidelinesForContactingTheHostamily(props){
    return (
        <div className = "warpDivAfterSendMail">
            
           <h3>
           {localStorage.name}, Your request was sent and received in the system.
           </h3>
            <h4>
            Please contact the {props.familyDatalies.familyName} family at {props.familyDatalies.familyPhonNumber} as soon as possible to arrange your accommodation
            </h4>
            
        </div>
    )
}
