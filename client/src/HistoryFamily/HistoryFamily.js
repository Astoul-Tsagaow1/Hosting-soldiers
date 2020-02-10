import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class HistoryFamily extends Component {
  render() {
    console.log(this.props.FamilyHistory);
    let Historyprop = [...this.props.FamilyHistory,1,23];
    let History = Historyprop.map(his => {
      return (<div>
        <h1> HHHHHHHH</h1>
      </div>)
        // <Table striped bordered hover>
        //   <thead>
        //     <tr>
        //       {/* <th>{his.soldierEmail}</th> */}
        //       <th>First Name</th>
        //       <th>Last Name</th>
        //       <th>Username</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td>1</td>
        //       <td>Mark</td>
        //       <td>Otto</td>
        //       <td>@mdo</td>
        //     </tr>
        //     <tr>
        //       <td>2</td>
        //       <td>Jacob</td>
        //       <td>Thornton</td>
        //       <td>@fat</td>
        //     </tr>
        //     <tr>
        //       <td>3</td>
        //       <td colSpan="2">Larry the Bird</td>
        //       <td>@twitter</td>
        //     </tr>
        //   </tbody>
        // </Table>
      ;
    });
    console.log(this.props.FamilyHistory);

  return (<div className="History">
   {History}  
    </div>);
  }
}
