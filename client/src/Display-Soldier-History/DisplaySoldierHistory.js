import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
export default class DisplaySoldierHistory extends Component {
    render() {
        let Historyprop = [...this.props.soldierHistory];
        let History = Historyprop.map((familyObj , index) => {  return (
            <tr>
              <td>{familyObj.familyName}</td>
              <td>{familyObj.fanilyEmail}</td>
              <td>{familyObj.hostingDate}</td>
              <td>{familyObj.familyPhonNumber}</td>
             <td>{familyObj.familyCity}</td>
          </tr>
            )})
        return (
             <div>
                <Table striped bordered hover>
          <thead>
            <tr>
              <th>Family Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Phone number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            
              {History}
            
          </tbody>
        </Table>
            </div>
        )
    }

}
