import React, { Component } from "react";

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      dog: []
    };
  }

  componentDidMount = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const requestURL = `https://kennel-staging.herokuapp.com/api/v1/reservations/current`;
    const optionsObj = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const response = await fetch(requestURL, optionsObj);
    const dogData = await response.json();
    await this.setState({ dog: dogData });
    console.log(dogData);
    return dogData;
  };
  render() {
    return (
      <div>
        <h1>heeelllloooooooo wooorrrlllllddddd</h1>
      </div>
    );
  }
}
