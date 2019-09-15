import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {case: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/case')
    .then(response => {
      this.setState({ case: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  tabRow(){
    return this.state.case.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <br/>
        <h3 align="center">case list</h3>
        <table className="table table-striped" style={{ marginTop: 40 }}>
          <thead>
            <tr>
              <th>client name</th>
              <th>case limitation date</th>
              <th colSpan="2">modify</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    );
  }
}
