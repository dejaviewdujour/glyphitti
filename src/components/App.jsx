import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import Box from "./Box";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('Clicked!');
  }

  
  render () {
    let boxes = [];
    for (let i = 0; i < 5; i++) {
      boxes.push(<Box y={-3 + i}/>)
    }
    return (
      <Scene>
        <Entity primitive='a-camera'>
          <Entity primitive='a-cursor'></Entity>
        </Entity>
        <Entity events={{click: this.handleClick}} primitive='a-box' color="red" position="0 0 -5"/>
        { boxes }
        <Entity primitive='a-cylinder' color="blue" position="2 0 -3"/>
      </Scene>
    );
  }
}

export default App;