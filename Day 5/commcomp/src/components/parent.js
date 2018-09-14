import React, { Component } from "react";
import Child from "./child";
export default class Parent extends Component {
  render() {
    return (
      <div>
        <Child {...this.props} />
      </div>
    );
  }
}
