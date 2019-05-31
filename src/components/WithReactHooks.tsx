import React, { useState } from 'react';
import withReactHooks from 'with-react-hooks';
import { useMousePosition } from '../hooks/useMousePosition';

class WithReactHooks extends React.Component {
  render() {
    const [counter, setCounter] = useState(0);

    return (
      <div>
        <h1>with-react-hooks</h1>
        <button
          style={{ color: 'red', fontSize: '72px' }}
          onClick={() => setCounter(counter + 1)}
        >
          {counter}
        </button>
        <p style={{ marginTop: '100px', fontSize: '48px' }}>
          X: {useMousePosition().x} Y: {useMousePosition().y}
        </p>
      </div>
    );
  }
}

export default withReactHooks(WithReactHooks);
