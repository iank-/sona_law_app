import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.client_name}
        </td>
        <td>
          {this.props.obj.case_limitation_date}
        </td>
        <td>
          <button className="btn btn-primary">edit</button>
        </td>
        <td>
          <button className="btn btn-danger">delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
