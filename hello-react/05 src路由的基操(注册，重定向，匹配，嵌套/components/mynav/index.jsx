import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div>
        {/* 直接{...props} 将属性给到当前navlink */}
        <NavLink
          activeClassName="customSty"
          className="list-group-item"
          {...this.props}
        />
      </div>
    );
  }
}
