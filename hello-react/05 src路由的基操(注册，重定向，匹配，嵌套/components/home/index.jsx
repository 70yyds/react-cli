import React, { Component } from "react";
import Mynav from "../mynav/index";
import News from "./news/index";
import Message from "./message/index";
import { Switch, Redirect, Route } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div>
        {/* 当使用嵌套路由时  需要带上父级路径以便匹配子级 */}
        <h3>我是Home的内容</h3>
        <Mynav to="/home/news">news</Mynav>
        <Mynav to="/home/message">message</Mynav>
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          {/* 子级的重定向 */}
          <Redirect to="/home/news"></Redirect>
        </Switch>
      </div>
    );
  }
}
