import 'aframe';
import 'aframe-particle-system-component';
import {Entity} from 'aframe-react';
import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('Clicked!');
  }
  
  render () {
    return (
    //   <Entity primitive='a-sphere' color="green" position={`-2 0 ${this.props.y}`}/>
      <Entity primitive='a-plane' plane src="../assets/cake.jpg" height=".5" width=".5" rotation="0 0 0" position="-0.053 1.161 -2.977" scale="1 1 1" visible="true" material="src:#cake" geometry="primitive:plane;height:.5;width:.5"/>
    );
  }
}

export default Box;