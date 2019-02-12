import "aframe";
import "aframe-particle-system-component";
import { Entity } from "aframe-react";
import React from "react";

class StampImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entity
        primitive="a-plane"
        plane
        src="#petraglyph"
        height=".5"
        width=".5"
        rotation="0 0 0"
        position={this.props.position}
        scale="1 1 1"
        material="src:#petraglyph; transparent: true"
        geometry="primitive:plane;height:.5;width:.5"
      />
    );
  }
}

export default StampImage;
