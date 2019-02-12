import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import StampImage from "./StampImage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [{ x: -0.053, y: 1.161, z: -2.977 }]
    }
  }

update = () => {
  let newValue = [{ x: 1, y: 2, z: -2.977 }];

  this.setState({
    location: newValue
})
}

  handleClick = () => {
    this.update();
      console.log('Clicked!', this.state.location);
  }
  
  render () {
    return (
      <Scene>
        <Entity primitive='a-assets'>
           <img id="cake" src="../assets/cake.jpg"/>
        </Entity>
        <Entity primitive='a-camera'>
          <Entity primitive='a-cursor'></Entity>
        </Entity>
        <Entity events={{click: this.handleClick}} 
            primative ='a-plane'
            id="wall"
            position="-1 0.5 -3"
            rotation="0 0 0"
            color="#4CC3D9"
            scale="4 3.61 1"
            visible="true"
            material="color:#4CC3D9"
            geometry="primitive:plane" 
            quaternion=""
            velocity=""
            dynamic-body="sphereRadius:NaN" />
        <StampImage stamps={this.state.location} />
        <Entity primitive='a-plane' 
            id="floor" 
            position="0 0 -4" 
            rotation="-90 0 0"  
            scale="3 3 1" 
            width="4" 
            height="4" 
            color="#7BC8A4" 
            visible="true" 
            material="color:#7BC8A4" 
            geometry="primitive:plane;width:4;height:4" 
            static-body="sphereRadius:NaN"/>
      </Scene>
    );
  }
}

export default App;