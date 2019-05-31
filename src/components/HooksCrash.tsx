import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

class HooksCrash extends React.Component {
  getMousePosition() {
    return useMousePosition();
  }

  render() {
    return (
      <div style={{ marginTop: '100px', fontSize: '72px' }}>
        X: {this.getMousePosition().x} Y: {this.getMousePosition().y}
      </div>
    );
  }
}

export default HooksCrash;
