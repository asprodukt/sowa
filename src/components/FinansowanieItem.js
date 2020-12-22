import React, { Component } from "react";

export default class FinansowanieItem extends Component {
  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="container FinansowanieItem borders py-5">
          <h1 className="text-primary">{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
