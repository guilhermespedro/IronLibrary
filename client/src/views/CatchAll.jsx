import React, { Component } from "react";

export default class CatchAllView extends Component {
  componentDidMount() {
    this.props.history.push("/error/404");
  }

  render() {
    return <div></div>;
  }
}
