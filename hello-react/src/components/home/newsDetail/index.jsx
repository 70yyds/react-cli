import React, { Component } from "react";
import qs from "qs";
export default class index extends Component {
  render() {
    // 接收向params参数
    // const dataInfo = { ...this.props.match.params };
    // console.log(this.props);

    // 接收search参数
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));
    console.log(this.props, id, title);
    return (
      <div>
        {/* params */}
        <ul>{/* <li key={dataInfo.id}>this is {dataInfo.title}</li>; */}</ul>
        {/* search */}
        <ul>
          <li key={id}>this is {title}</li>;
        </ul>
      </div>
    );
  }
}
