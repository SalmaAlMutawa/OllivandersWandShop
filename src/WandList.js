import React, { Component } from "react";
import WandCard from "./WandCard";

class WandList extends Component {
  render() {
    let wandcard = this.props.wands.map(wand => (
      <WandCard wand={wand} key={wand.wood} />
    ));
    return (
      <div>
        <div style={{ backgroundColor: "blue" }} className="container">
          <div>
            <h3>Ollivander's Wand Shop!</h3>
            <div className="row">{wandcard}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WandList;
