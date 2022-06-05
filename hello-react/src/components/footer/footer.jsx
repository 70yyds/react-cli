import React, { Component } from "react";
import "./footer.css";
export default class footer extends Component {
  removeAll = () => {
    const dolist = this.props.todos;
    dolist.forEach((item, index) => {
      if (item.isdo) {
        dolist.splice(index, 1);
      }
    });
    this.props.delete(dolist);
  };
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成0</span> / 全部2
        </span>
        <button className="btn btn-danger" onClick={this.removeAll}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
