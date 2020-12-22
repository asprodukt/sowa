import React, { Component } from "react";

export default class AtestItem extends Component {
  render() {
    return (
      <div className="container-fluid bg-light py-5 borders">
        <div className="container">
          <div className="AtestItem row">
            <div className="col-md-6 AtestItemLeft">
              <img src={this.props.image} alt={this.props.alt} />
            </div>
            <div className="col-md-6 AtestItemRight">
              {this.props.right}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
