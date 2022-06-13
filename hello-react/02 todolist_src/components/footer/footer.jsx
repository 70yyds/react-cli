import React, { Component } from "react";
import "./footer.css";
export default class footer extends Component {
  removeAll = () => {
    this.props.removeAll();
  };
  selectAll = (event) => {
    this.props.checkAll(event.target.checked);
  };
  render() {
    const { todos } = this.props;
    const total = todos.length;
    const doneNum = todos.reduce((pre, item) => pre + (item.isdo ? 1 : 0), 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.selectAll}
            checked={doneNum === total}
          />
        </label>
        <span>
          <span>已完成{doneNum}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.removeAll}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
