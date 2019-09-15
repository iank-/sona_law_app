import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeCaseLimitationDate = this.onChangeClientName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      client_name: '',
      case_limitation_date: ''
    }
  }

componentDidMount() {
  axios.get('http://localhost:4000/case/edit/' + this.props.match.params.id)
    .then(response => {
      this.setState({
        client_name: response.data.client_name,
        case_limitation_date: response.data.case_limitation_date
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  onChangeClientName(e) {
    this.setState({
      client_name: e.target.value
    });
  }
  onChangeCaseLimitationDate(e) {
    this.setState({
      case_limitation_date: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      client_name: this.state.client_name,
      case_limitation_date: this.state.case_limitation_date
    };
    axios.post('http://localhost:4000/case/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
      <div style={{ marginTop:10}}>
        <h3 align="center">update case.</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>client name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.client_name}
              onChange={this.onChangeClientName}
            />
          </div>
          <div className="form-group">
            <label>case limitation date (yyyy/mm/dd)</label>
            <input
              type="text"
              className="form-control"
              value={this.state.case_limitation_date}
              onChange={this.onChangeCaseLimitationDate}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value= "update case"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}
