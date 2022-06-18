import React, { Component } from "react";
import "./list.css";
export default class list extends Component {
  render() {
    const { toList } = this.props;
    const listData = toList;
    return (
      <div className="row">
        {listData.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <a target="_blank" rel="noreferrer">
                <img src={item.avatar_url} style={{ width: "100px" }} alt="" />
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
