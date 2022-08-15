import React, { Component } from "react";
import About from "./components/about/index";
import Home from "./components/home/index";
import Mynav from "./components/mynav/index";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 编写路由链接 */}
              {/* 一般组件，  这里标签属性通过props传递，标签体通过props的 children传递   本质上都在props里*/}
              <Mynav to="/home">Home</Mynav>
              <Mynav to="/about">About</Mynav>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由组件 */}
                {/* switch 单一匹配 可以在匹配到之后就不匹配后续路由组件了 */}
                {/* 默认路由路径为模糊匹配  只要路由组件的path存在路由连接的通路径即可 */}
                {/* exact 为严格匹配  必须全字不能多不能少  慎用 */}
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  {/* <Route path="/home" component={Home}>
                    123
                  </Route> */}
                  {/* 重定向  没有匹配的路由时自动重定向到指定组件 */}
                  <Redirect to="/home"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
