import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
import Header from "./components/header/header";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <List />
      </div>
    );
  }
}
