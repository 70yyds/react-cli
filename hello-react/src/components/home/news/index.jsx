import React, { Component } from "react";
import NewsDetail from "../newsDetail/index";
import { Route, Link } from "react-router-dom/cjs/react-router-dom.min";
export default class index extends Component {
  state = {
    dataList: [
      {
        id: 1,
        txt: "今天天气很好",
      },
      {
        id: 2,
        txt: "今天下暴雨",
      },
      {
        id: 3,
        txt: "今天晴转多云",
      },
    ],
    linkList: [
      {
        id: 1,
        txt: "linkOne",
        path: "/home/news/newsDetail/",
      },
      {
        id: 2,
        txt: "linkTwo",
        path: "/home/news/newsDetail/",
      },
      {
        id: 3,
        txt: "linkThree",
        path: "/home/news/newsDetail/",
      },
    ],
  };
  render() {
    const { linkList } = this.state;
    return (
      <div>
        <ul>
          {linkList.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由传递params参数 */}
                {/* <Link to={item.path + `${item.id}/` + `${item.txt}`}>
                  {item.txt}
                </Link>
                ; */}
                {/* 向路由传递search参数 */}
                <Link
                  to={`/home/news/newsDetail?id=${item.id}&title=${item.txt}`}
                >
                  {item.txt}
                </Link>
                ;
              </li>
            );
          })}
        </ul>
        {/* 接受params参数 */}
        {/* <Route
          path="/home/news/newsDetail/:id/:title"
          component={NewsDetail}
        ></Route> */}
        {/* 接受search参数 */}
        <Route path="/home/news/newsDetail" component={NewsDetail}></Route>
      </div>
    );
  }
}
