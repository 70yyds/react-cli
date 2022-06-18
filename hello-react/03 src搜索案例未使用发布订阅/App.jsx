import React, { Component } from "react";
import "./App.css";
import List from "./components/list/list";
import Header from "./components/header/header";
export default class App extends Component {
  state = { list: [] };
  getList = (arr) => {
    console.log(arr);
    this.setState({ list: arr });
  };
  toList = () => {};
  render() {
    const { list } = this.state;
    return (
      <div className="container">
        <Header updateList={this.getList} />
        <List toList={list} />
      </div>
    );
  }
}
