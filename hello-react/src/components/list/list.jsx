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
    return (event) => {
      this.props.check(item, event.target.checked);
    };
  };
  //删除事件
  handleRemove = (item) => {
    return () => {
      this.props.remove(item);
    };
  };
  render() {
    const { todos } = this.props;
    const { isHover, currentId } = this.state;
    return (
      <ul className="todo-main">
        {todos.map((item) => {
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
                  checked={item.isdo}
                  onChange={this.handleCheck(item)}
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
