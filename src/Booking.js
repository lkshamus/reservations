import React, { Component } from "react";
import Header from "./Header";

export default class Booking extends Component {
  constructor() {
    super();
    this.state = {
      ownerFn: "",
      ownerLn: "",
      address: "",
      cellNumber: "",
      homeNumber: "",
      ownerEmail: "",
      petName: "",
      species: "",
      breed: "",
      color: "",
      dob: "",
      spayed: "",
      medications: "",
      feeding: "",
      shots: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSUbmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Owner Information</h1>
        <form>
          <input
            placeholder="Owner's First Name"
            onChange={this.handleChange}
            value={this.state.ownerFn}
            name="ownerFn"
          />
          <input
            placeholder="Owner's Last Name"
            onChange={this.handleChange}
            value={this.state.ownerLn}
            name="ownerLn"
          />
          <input
            placeholder="Address"
            onChange={this.handleChange}
            value={this.state.address}
            name="address"
          />
          <input
            placeholder="Cell Phone"
            onChange={this.handleChange}
            value={this.state.cellNumber}
            name="cellNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <input
            placeholder="Home Phone"
            onChange={this.handleChange}
            value={this.state.homeNumber}
            name="homeNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <input
            placeholder="Email"
            type="email"
            onChange={this.handleChange}
            value={this.state.ownerEmail}
            name="ownerEmail"
          />
        </form>
        <h1>Pet Information</h1>
        <form>
          <input
            placeholder="Pet Name"
            onChange={this.handleChange}
            value={this.state.petName}
            name="petName"
          />
          <input
            placeholder="Species"
            onChange={this.handleChange}
            value={this.state.species}
            name="species"
          />
          <input
            placeholder="Breed"
            onChange={this.handleChange}
            value={this.state.breed}
            name="breed"
          />
          <input
            placeholder="Pet Color"
            onChange={this.handleChange}
            value={this.state.color}
            name="color"
          />
          <input
            placeholder="Date of Birth"
            onChange={this.handleChange}
            value={this.state.dob}
            name="dob"
          />
          <select name="spayed" onChange={this.handleChange}>
            <option value={true} name="spayed">
              Spayed/Neutured
            </option>
            <option value={false} name="spayed">
              Not Spayed/Neutured
            </option>
          </select>
        </form>
        <h1>Vet Information</h1>
        <form />
        <h1>Reservation Information</h1>
      </div>
    );
  }
}
