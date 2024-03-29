import React, { Component } from "react";
import { nanoid } from "nanoid";

import "./header.css";
export default class header extends Component {
  handleKeyUp = (event) => {
    if (event.keyCode !== 13) return;
    console.log(event.target.value, event.keyCode);
    this.props.add({ name: event.target.value, id: nanoid(), isdo: false });
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
