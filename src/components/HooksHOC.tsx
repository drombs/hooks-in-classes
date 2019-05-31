import React from 'react';
import { withHooksHOC } from './withHooksHOC';

interface IHooksHOCProps {
  position: {
    x: number;
    y: number;
  };
}

class HooksHOC extends React.Component<IHooksHOCProps> {
  render() {
    return (
      <div>
        <p style={{ fontSize: '48px' }}>Hooks HOC</p>
        <p style={{ fontSize: '48px' }}>
          X: {this.props.position.x} Y: {this.props.position.y}
        </p>
      </div>
    );
  }
}

export default withHooksHOC(HooksHOC);
