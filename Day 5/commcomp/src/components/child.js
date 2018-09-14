import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.click}>{this.props.caption}</button>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
