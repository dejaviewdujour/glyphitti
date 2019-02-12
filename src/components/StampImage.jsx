import 'aframe';
import 'aframe-particle-system-component';
import {Entity} from 'aframe-react';
import React from 'react';

class StampImage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
    //   <Entity primitive='a-sphere' color="green" position={`-2 0 ${this.props.y}`}/>
      <Entity primitive='a-plane' 
      plane src="#cake" 
      height=".5" 
      width=".5" 
      rotation="0 0 0" 
      position={this.props.stamps[0]} 
      scale="1 1 1" 
      visible="true" 
      material="src:#cake"
      geometry="primitive:plane;height:.5;width:.5"/>
    );
  }
}

export default StampImage;