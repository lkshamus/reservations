import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { checkAuthorization } from "./utilities";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      checkAuthorization: checkAuthorization,
      loginError: "",
      isAuthenticated: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  userWarning = async (type, warning) => {
    await this.setState({
      [type]: warning
    });
    await setTimeout(this.removeWarning, 5000);
  };

  removeWarning = () => {
    this.setState({
      loginError: ""
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await this.state.checkAuthorization(email, password);
      localStorage.setItem("token", JSON.stringify(response.jwt));
      console.log(response);
      if (response.jwt) {
        this.setState({ isAuthenticated: true });
        this.props.history.push("/");
      }
      setTimeout(() => {
        this.userWarning("loginError", "login-error-active");
      }, 500);
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
        <div className={`login-error-wrapper ${this.state.loginError}`}>
          <p className="login-error-text">
            incorrect email/password combination
          </p>
        </div>
      </form>
    );
  }
}
