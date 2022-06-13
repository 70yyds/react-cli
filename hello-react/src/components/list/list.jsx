import React, { Component } from "react";
import "./list.css";
export default class list extends Component {
  render() {
    const listData = [
      {
        id: 1,
        jsUrl: "https://github.com/reactjs",
        imgUrl: "https://avatars.githubusercontent.com/u/6412038?v=3",
        name: "reactjs",
      },
      {
        id: 2,
        jsUrl: "https://github.com/reactjs",
        imgUrl: "https://avatars.githubusercontent.com/u/6412038?v=3",
        name: "reactjs",
      },
      {
        id: 3,
        jsUrl: "https://github.com/reactjs",
        imgUrl: "https://avatars.githubusercontent.com/u/6412038?v=3",
        name: "reactjs",
      },
      {
        id: 4,
        jsUrl: "https://github.com/reactjs",
        imgUrl: "https://avatars.githubusercontent.com/u/6412038?v=3",
        name: "reactjs",
      },
    ];
    return (
      <div className="row">
        {listData.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <a href={item.jsUrl} target="_blank" rel="noreferrer">
                <img src={item.imgUrl} style={{ width: "100px" }} alt="" />
              </a>
              <p className="card-text">{item.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
