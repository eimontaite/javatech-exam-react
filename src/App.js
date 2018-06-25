import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar/Navbar";
import Routes from "./Routes"
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Navbar/>
      <Routes />
    </div>
    )
  }
}

export default withRouter(App);