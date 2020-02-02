import React, { Component } from 'react';
import './DisplayMatchingFamilies.css';
export default class DisplayMatchingFamilies extends Component {
    render() {
        // optionsHosting = families.map((obj)=>{return(
        //             <div>
        //                 <p>{obj.familyname}</p>
        //            </div>)})
        //     }
        const families = this.props.resultMatch;
        const displayFimilies = families.map((obj , index)=>{
            return(
                <div className = "resultFamiles" key = {index}>
                    Family name:<h1 >{obj.familyname}</h1>
                    City:<h1 >{obj.familyCity}</h1>
                    Can hosting from:<h1 >{obj.fromDate}</h1>
                    Until:<h1 >{obj.untilDate}</h1>
                    <button>send</button>
                    
                </div>
            )
        })
        return (
            <div className = 'warpResultMAtch'>
                {displayFimilies}
            </div>
        )
    }
}
