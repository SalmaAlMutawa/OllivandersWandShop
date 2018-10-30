import React, { Component } from "react";
import WandCard from "./WandCard";

class WandList extends Component {
  render() {
    let wandcard = this.props.wands.map(wand => (
      <WandCard wand={wand} key={wand.wood} />
    ));
    return (
      <div
        style={{
          backgroundImage: `url(https://images7.alphacoders.com/909/909541.jpg)`
        }}
      >
        <div className="container">
          <div>
            <h3 style={{ color: "white" }}>Ollivander's Wand Shop!</h3>
            <div className="row">{wandcard}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WandList;
