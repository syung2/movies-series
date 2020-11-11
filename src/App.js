import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/home/Landing";
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Movie from "./components/home/Movie";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          <Route path="/" exact component={Landing} />
          <Route path="/movie/:id" exact component={Movie} />
          <Footer></Footer>
        </Router>
      </Provider>
    );
  }
}

export default App;
