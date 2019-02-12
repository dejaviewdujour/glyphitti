import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import StampImage from "./StampImage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  update = () => {
    const x = event.detail.intersection.point.x;
    const y = event.detail.intersection.point.y;
    const z = event.detail.intersection.point.z;
    const newValue = { x, y, z };

    this.setState({
      locations: [...this.state.locations, newValue],
    });
  };

  handleClick = () => {
    this.update();
  };

  render() {
    const stamps = this.state.locations.map((obj, i) => (
      <StampImage position={obj} key={i} />
    ));

    return (
      <Scene cursor="rayOrigin: mouse">
        <a-entity daydream-controls />
        <Entity primitive="a-assets">
          <img id="petraglyph" src="../assets/petraglyph.png" />
          <img id="sky" src="../assets/pefo.jpg" />
          {/* <video id="video" style="display:none" 
               autoplay loop crossorigin="anonymous" playsinline webkit-playsinline>
          <source type="video/mp4"
               src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/" />
        </video> */}
        </Entity>
        <Entity
          events={{ click: this.handleClick }}
          primative="a-plane"
          id="wall"
          position="-.7 1 -2"
          rotation="0 0 0"
          scale="5 3.61 1"
          visible="true"
          color="#FFF"
          material="side: double; color: #c9890a; transparent: true; opacity: 0.01"
          geometry="primitive:plane"
          quaternion=""
          velocity=""
          dynamic-body="sphereRadius:NaN"
        />
        {stamps}
        <Entity primitive="a-sky" src="../assets/pefo.jpg" rotation="0 75 0" />
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" />
        </Entity>
      </Scene>
    );
  }
}

export default App;
