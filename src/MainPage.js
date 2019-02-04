import React, { Component } from "react";
import Header from "./Header";

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }

  componentDidMount = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const requestURL = `https://kennel-staging.herokuapp.com/api/v1/reservations/current`;
      const optionsObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await fetch(requestURL, optionsObj);
      const dogData = await response.json();
      await this.setState({ dogs: dogData.data });
      return dogData;
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    const { dogs } = this.state;
    console.log(dogs);
    let dogInfo;
    try {
      dogInfo = dogs.map(dog => (
        <div key={dog.attributes.runNumber}>
          <p>Run Number: {dog.attributes.runNumber}</p>
          <p>Pet Name: {dog.attributes.pet.data.attributes.name}</p>
          <p>Species: {dog.attributes.pet.data.attributes.species}</p>
          <p>Breed: {dog.attributes.pet.data.attributes.breed}</p>
        </div>
      ));
    } catch {
      console.log("error");
    }
    return (
      <div>
        <Header />
        <h1>{dogInfo}</h1>
      </div>
    );
  }
}
