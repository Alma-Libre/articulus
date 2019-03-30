import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Landing from "./components/layout/landing";
//import "./bootstrap.min.css";
//import "./all.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
