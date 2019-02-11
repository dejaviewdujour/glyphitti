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
      <Entity primitive='a-sphere' color="green" position={`-2 0 ${this.props.y}`}/>
    );
  }
}

export default Box;