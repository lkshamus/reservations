import React, { Component } from "react";

export default class Reservations extends Component {
  constructor() {
    super();
    this.state = {
      checkin: "",
      checkout: "",
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <form>
        <h1>Reservation Information</h1>
        <input className='search' placeholder='search for existing customer' />
        <input 
          placeholder='check in'
          value={this.state.checkin}
          onChange={this.handleChange}
          name='checkin'
        />
        <input 
          placeholder='check out'
          value={this.state.checkout}
          onChange={this.handleChange}
          name='checkout'
        />        
      </form>
    )
  }
}