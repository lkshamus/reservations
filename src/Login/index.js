import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          placeholder="Email"
          value={this.state.email}
        />
        <input
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
        />
        <button>submit</button>
      </form>
    );
  }
}
