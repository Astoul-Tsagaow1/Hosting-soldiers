import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import './HistoryFamily.css'

export default class HistoryFamily extends Component {
  render() {
    console.log(this.props.FamilyHistory);
    let Historyprop = [...this.props.FamilyHistory];
    let History = Historyprop.map((his , index) => {
      return (
      <tr Key = {index}>
              <td>{his.soldierEmail}</td>
              <td>{his.soldierName}</td>
              <td>{his.hostingDate}</td>
              <td>{his.soldierPhonNumber}</td>
        </tr> 
      );
    });
    console.log(this.props.FamilyHistory);

    return (
    <div className="History-family">
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>soldierEmail</th>
              <th>soldierName</th>
              <th>hostingDate</th>
              <th>soldierPhonNumber</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
         { Historyprop.length?   History : ""}
=======
         { Historyprop.length ?   History :""}
>>>>>>> 688353b2c0f7768d21d7527dd789b696bd800192
          </tbody>
        </Table>
      
      
    </div>)
  }
}


