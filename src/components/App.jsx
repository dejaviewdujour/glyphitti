import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import StampImage from "./StampImage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [{ x: -0.053, y: 1.161, z: -2.977 }],
      visible: false
    }
  }

update = () => {
  let x = event.detail.intersection.point.x;
  let y = event.detail.intersection.point.y;
  let z = event.detail.intersection.point.z;
  let newValue = [{ x, y, z }];

  this.setState({
    location: newValue,
    visible: true
})
}

  handleClick = () => {
    this.update();
  }
  
  render () {
    return (
      <Scene>
        <Entity primitive='a-assets'>
           <img id="petraglyph" src="../assets/petraglyph.png"/>
           <img id="sky" src="../assets/pefo.jpg"/>
           {/* <video id="video" style="display:none" 
               autoplay loop crossorigin="anonymous" playsinline webkit-playsinline>
          <source type="video/mp4"
               src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/" />
        </video> */}
        </Entity>
        <Entity primitive='a-camera'>
          <Entity primitive='a-cursor'></Entity>
        </Entity>
        <Entity events={{click: this.handleClick}} 
            primative ='a-plane'
            id="wall"
            position=".5 1 -2"
            rotation="0 0 0"
            scale="8 3.61 1"
            visible="true"
            color="#FFF"
            material="side: double; color: #c9890a; transparent: true; opacity: 0.2"
            geometry="primitive:plane" 
            quaternion=""
            velocity=""
            dynamic-body="sphereRadius:NaN" />
        <StampImage stamps={this.state.location}
        visible={this.state.visible} />
        <Entity primitive="a-sky"
        src="../assets/pefo.jpg" 
        rotation="0 -130 0"/>
      </Scene>
    );
  }
}

export default App;