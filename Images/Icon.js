import React, { Component } from "react";
import { Icon } from "@iconify/react";

export class Iconify extends Component {
  render() {
    return (
      <div>
        <Icon
          icon="noto:hindu-temple"
          width="40"
          height="40"
          style={{ display: "inline-block" }}
        />
      </div>
    );
  }
}

export default Iconify;
