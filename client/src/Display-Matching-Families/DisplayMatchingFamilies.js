import React, { Component } from 'react';
import './DisplayMatchingFamilies.css';
export default class DisplayMatchingFamilies extends Component {
    render() {
        const families = this.props.resultMatch;
        const displayFimilies = families.map((obj , index)=>{
            return(
                <div className = "cards" key = {index}>
                    <div className="card" style={{width: "18rem"}}>
                    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Hello soldier</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Family:{obj.familyname}</li>
                        <li className="list-group-item">City:{obj.familyCity}</li>
                        <li className="list-group-item">From date:{obj.fromDate}</li>
                        <li className="list-group-item">until date:{obj.untilDate}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                    <button>send</button>
                    </div>
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
