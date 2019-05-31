import React from 'react';
import { MousePosition } from './MousePosition';

export class HooksRenderProps extends React.Component {
  render() {
    return (
      <MousePosition>
        {(position) => (
          <div>
            <h1>Hooks render props</h1>
            <p style={{ marginTop: '100px', fontSize: '48px' }}>
              X: {position.x} Y: {position.y}
            </p>
          </div>
        )}
      </MousePosition>
    );
  }
}
