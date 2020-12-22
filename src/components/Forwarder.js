import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Forwarder extends Component {
  render() {
    return (
      <div className="Forwarder container my-md-5">
        <div className="row">
          {this.props.switchColumns && (
            <div className="ForwarderRight col-md-6">
              <img src={this.props.src} alt={this.props.src}></img>
            </div>
          )}
          <div className="ForwarderLeft col-md-6">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <Link to={this.props.to}>
              <button
                type="button"
                className="btn btn-primary shadow animated fadeInUp"
              >
                Zobacz więcej {">"}
              </button>
            </Link>
          </div>
          {!this.props.switchColumns && (
            <div className="ForwarderRight col-md-6">
              <img src={this.props.src} alt={this.props.src}></img>
            </div>
          )}
        </div>
      </div>
    );
  }
}
