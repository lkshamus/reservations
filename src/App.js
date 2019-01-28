import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Booking from "./Booking";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/booking" component={Booking} />
      </div>
    );
  }
}

export default App;
