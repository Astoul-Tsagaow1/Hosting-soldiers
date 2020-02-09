import React from 'react'

export default function GuidelinesForContactingTheHostamily(props){
    return (
        <div>
           <h3>
           {localStorage.name}, Your request was sent and received in the system.
           </h3>
            <h3>
            Please contact the {props.familyDatalies.familyName} family at {props.familyDatalies.familyPhonNumber} as soon as possible to arrange your accommodation
            </h3>
            
        </div>
    )
}
