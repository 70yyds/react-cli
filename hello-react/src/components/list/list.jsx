import React, { Component } from "react";
import "./list.css";
class list extends Component {
  state = { isHover: false, currentId: null };
  handleHover = (flag, id) => {
    return () => {
      this.setState({ isHover: flag, currentId: id });
    };
  };
  handleLeave = (flag) => {
    return () => {
      this.setState({ isHover: flag });
    };
  };
  //checkbox事件
  handleCheck = (item) => {
    return () => {
      item.isdo = !item.isdo;
    };
  };
  //删除事件
  handleRemove = (item) => {
    return () => {
      const dolist = this.props.todos;
      const arr = dolist.filter((e, j) => {
        return e.id !== item.id;
      });
      this.props.delete(arr);
    };
  };
  render() {
    const dolist = this.props.todos;
    const { isHover, currentId } = this.state;
    return (
      <ul className="todo-main">
        {dolist.map((item) => {
          return (
            <li
              key={item.id}
              onMouseEnter={this.handleHover(true, item.id)}
              onMouseLeave={this.handleLeave(false)}
              style={{
                backgroundColor:
                  item.id === currentId && isHover ? "#ddd" : "white",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  defaultChecked={item.isdo}
                  onClick={this.handleCheck(item)}
                />
                <span>{item.name}</span>
              </label>
              <button
                onClick={this.handleRemove(item)}
                className="btn btn-danger"
                style={{
                  display: item.id === currentId && isHover ? "block" : "none",
                }}
              >
                删除
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default list;
