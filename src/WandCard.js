import React, { Component } from "react";
import wands from "./wands";

class WandCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card mb-5" style={{ backgroundColor: "white" }}>
          <div>
            <img
              className="card-img-top img-fluid"
              src={this.props.wand.imageUrl}
              alt={this.props.wand.core}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{this.props.wand.core}</span>
            </h5>
            <small className="card-text">Wood: {this.props.wand.wood}</small>
            <br />
            <small className="card-text">
              Length: {this.props.wand.length}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default WandCard;
