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
  //添加
  add = (item) => {
    const { todos } = this.state;
    //1 unshift在前方添加
    // todos.unshift(item);
    // this.setState({ todos: todos });
    //2 使用展开运算法...,谁在前就在前
    const newtodo = [item, ...todos];
    this.setState({ todos: newtodo });
  };
  //删除
  remove = (item) => {
    const { todos } = this.state;
    const arr = todos.filter((e, j) => {
      return e.id !== item.id;
    });
    this.setState({ todos: arr });
  };
  removeAll = () => {
    const { todos } = this.state;
    let arr = todos.filter((item, index) => {
      return !item.isdo;
    });
    this.setState({ todos: arr });
  };
  //选中
  check = (item, status) => {
    const { todos } = this.state;
    const arr = todos.map((e) => {
      if (e.id === item.id) {
        return { ...e, isdo: status };
      } else {
        return e;
      }
    });
    this.setState({ todos: arr });
  };
  //全选
  checkAll = (status) => {
    const { todos } = this.state;
    const arr = todos.map((item) => {
      return { ...item, isdo: status };
    });
    this.setState({ todos: arr });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header add={this.add} />
          <List todos={todos} remove={this.remove} check={this.check} />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            removeAll={this.removeAll}
          />
        </div>
      </div>
    );
  }
}
