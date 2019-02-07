import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"> Home </Link>
        <Link to="/newcustomer"> New Pet </Link>
        <Link to="/login"> Log Out </Link>
        <Link to='/reservation'> Make Reservation </Link>
      </div>
    );
  }
}
