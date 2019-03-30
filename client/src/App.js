import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Landing from "./components/layout/landing";
import Login from "./components/auth/Login";
// import "./bootstrap.min.css";
// import "./all.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path = "/" component={Landing} />
          <div className="container">
            <Route exact path = "/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
