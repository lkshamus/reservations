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
      spayed: true,
      medications: "",
      feeding: "",
      shots: "",
      practiceName: "",
      vetName: "",
      vetAddress: "",
      vetPhone: "",
      vetEmail: "",
      checkin: "",
      checkout: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"))
    const requestURL = `http://kennel-staging.herokuapp.com/api/v1/pets`
    const petBody = JSON.stringify({
      "name": this.state.petName,
      "species": this.state.species,
      "breed": this.state.breed,
      "color": this.state.color,
      "dob": this.state.dob,
      "spayed_neutered": this.state.spayed,
      "medications": this.state.medications,
      "feeding_instructions": this.state.feeding,
      "shots": this.state.shots
    })
    const optionsObj = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: petBody,
  }
  console.log(petBody)
  try {
    const response = await fetch(requestURL, optionsObj);
    return await response.json();
  } catch(error) {
    console.log(error)
  }
}

  render() {
    return (
      <div>
        <Header />

        <form onSubmit={e => this.handleSubmit(e)}>
          <h1>Owner Information</h1>
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
        <h1>Pet Information</h1>
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
          <input
            placeholder="Medications"
            onChange={this.handleChange}
            value={this.state.medications}
            name="medications"
          />
          <input
            placeholder="Feeding Instructions"
            onChange={this.handleChange}
            value={this.state.feeding}
            name="feeding"
          />
          <input
            placeholder="Shots"
            onChange={this.handleChange}
            value={this.state.shots}
            name="shots"
          />
        <h1>Vet Information</h1>
          <input
            placeholder="Practice Name"
            onChange={this.handleChange}
            value={this.state.practiceName}
            name="practiceName"
          />
          <input
            placeholder="Vet Name"
            onChange={this.handleChange}
            value={this.state.vetName}
            name="vetName"
          />
          <input
            placeholder="Vet's Address"
            onChange={this.handleChange}
            value={this.state.vetAddress}
            name="vetAddress"
          />
          <input
            placeholder="Vet Phone Number"
            onChange={this.handleChange}
            value={this.state.vetPhone}
            name="vetPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <input
            placeholder="Vet's Email"
            onChange={this.handleChange}
            value={this.state.vetEmail}
            name="vetEmail"
            type="email"
          />
          <h1>Reservation Information</h1>
          <input 
            placeholder='check in'
            type='date' 
            value={this.state.checkin}
            onChange={this.handleChange}
            name='checkin'
          />
          <input 
            placeholder='check out'
            type='date' 
            value={this.state.checkout}
            onChange={this.handleChange}
            name='checkout'
          />
          <input name='submit' type='submit' />
        </form>
      </div>
    );
  }
}
