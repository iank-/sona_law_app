
import React, { Component } from 'react';

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeCaseLimitationDate = this.onChangeCaseLimitationDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      client_name: '',
      case_limitation_date: ''
    }
  }

  onChangeClientName(e) {
    this.setState({
      client_name: e.target.value
    });
  }

  onChangeCaseLimitationDate(e) {
    this.setState({
      case_limitation_date: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.client_name}, ${this.state.case_limitation_date}`)

    this.setState({
      client_name: '',
      case_limitation_date: ''
    });
  }


  render() {
    return (
      <div style={{marginTop:10}}>
        <h2>add new client.</h2>
        <h5>"why don't you just meet me in the miiiiiiiddleeeee?"</h5>
        <br/>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>client name : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.client_name}
              onChange={this.onChangeClientName}
            />
          </div>
          <div className="form-group">
            <label>case limitation date (yyyy/mm/dd): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.case_limitation_date}
              onChange={this.onChangeCaseLimitationDate}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="sign 'em up!" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}
