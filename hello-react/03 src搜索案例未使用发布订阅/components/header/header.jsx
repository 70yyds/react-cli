import React, { Component } from "react";
import axios from "axios";
export default class header extends Component {
  search = () => {
    const {
      keyWordEle: { value: key },
    } = this;
    console.log(key);
    axios
      .get(`https://api.github.com/search/users?q=${key}`)
      .then((res) => {
        console.log(this.props);
        this.props.updateList(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(e) => (this.keyWordEle = e)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
