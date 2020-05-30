import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./component/Pages/home";
import Login from "./component/Pages/login";
import Signup from "./component/Pages/signup";
import Profile from "./component/Pages/profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
