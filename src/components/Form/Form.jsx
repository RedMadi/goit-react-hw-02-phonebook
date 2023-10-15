import React, { Component } from 'react';
import { FormContainer } from './Form.styled';
export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <FormContainer onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            required
          />
          <label>Number</label>
          <input
            type="tel"
            onChange={this.handleChange}
            name="number"
            value={this.state.number}
            required
          />
          <button>Add contact</button>
        </FormContainer>
      </div>
    );
  }
}
