import React, { Component } from "react";
import { checkAuthorization } from "./utilities";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      checkAuthorization: checkAuthorization
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await this.state.checkAuthorization(email, password);
      localStorage.setItem("token", JSON.stringify(response.jwt));
      this.props.history.push("/");
      console.log(response);
    } catch {
      console.log("error");
    }
  };

  render() {
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <input
          onChange={this.handleChange}
          placeholder="Email"
          value={this.state.email}
          name="email"
        />
        <input
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
          name="password"
        />
        <button
          onClick={e => {
            e.preventDefault();
            this.handleSubmit(e);
          }}
        >
          submit
        </button>
      </form>
    );
  }
}
