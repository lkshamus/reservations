import React, { Component } from "react";
import Header from "./Header";

export default class Booking extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <form>
          <input placeholder="Name" />
        </form>
      </div>
    );
  }
}
