import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Booking from "./Booking";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      owners: [],
      vets: []
    }
  }

  componentDidMount = async () => {
    await this.fetchPets()
    await this.fetchOwners()
    await this.fetchVets()
  }

  fetchPets = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const requestURL = `http://kennel-staging.herokuapp.com/api/v1/pets`;
      const optionsObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await fetch(requestURL, optionsObj);
      const petInfo = await response.json();
      await this.setState({ pets: petInfo.data });
      console.log('hellooooooo???', petInfo.data)
      return petInfo;
    } catch {
      console.log('errrrr')
    }
  }

  fetchOwners = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const requestURL = `http://kennel-staging.herokuapp.com/api/v1/owners`;
      const optionsObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await fetch(requestURL, optionsObj);
      const ownerInfo = await response.json();
      await this.setState({ owners: ownerInfo.data });
      console.log('hellooooooo???', ownerInfo.data)
      return ownerInfo;
    } catch {
      console.log('errrrr')
    }
  }

  fetchVets = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const requestURL = `http://kennel-staging.herokuapp.com/api/v1/owners`;
      const optionsObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await fetch(requestURL, optionsObj);
      const vetInfo = await response.json();
      await this.setState({ vets: vetInfo.data });
      console.log('hellooooooo???', vetInfo.data)
      return vetInfo;
    } catch {
      console.log('errrrr')
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route 
          exact path="/" 
          render={() => (
            <MainPage 
              pets={this.state.pets}
              owners={this.state.owners}
              vets={this.state.vets}
            />
          )}
          />
        <Route 
          exact path="/booking"
          render={() => (
            <Booking 
              pets={this.state.pets}
              owners={this.state.owners}
              vets={this.state.vets}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
