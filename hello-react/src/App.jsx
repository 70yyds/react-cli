import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import List from "./components/list/list";
import Footer from "./components/footer/footer";
export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: "eat",
        isdo: true,
      },
      {
        id: 2,
        name: "play",
        isdo: false,
      },
      {
        id: 3,
        name: "drink",
        isdo: true,
      },
    ],
  };
  //添加后更新视图
  add = (item) => {
    const { todos } = this.state;
    //1 unshift在前方添加
    // todos.unshift(item);
    // this.setState({ todos: todos });
    //2 使用展开运算法...,谁在前就在前
    const newtodo = [item, ...todos];
    this.setState({ todos: newtodo });
  };
  //更新视图
  remove = (arr) => {
    this.setState({ todos: arr });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header add={this.add} />
          <List todos={todos} delete={this.remove} />
          <Footer todos={todos} delete={this.remove} />
        </div>
      </div>
    );
  }
}
