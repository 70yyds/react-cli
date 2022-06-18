import React, { Component } from "react";
import bus from "pubsub-js";
import "./list.css";
export default class list extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    //('名字'，数据方法)
    this.token = bus.subscribe("getList", (_, data) => {
      console.log(data);
      this.setState({ list: data });
    });
  }
  //销毁之前取消订阅事件
  componentWillUnmount() {
    bus.unsubscribe(this.token);
  }
  render() {
    const { list } = this.state;
    return (
      <div className="row">
        {list.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <a href={item.html_url} target="_blank" rel="noreferrer">
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
