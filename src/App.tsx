import React from 'react';
import HooksCrash from './components/HooksCrash';
import { HooksRenderProps } from './components/HooksRenderProps';
import WithReactHooks from './components/WithReactHooks';
import HooksHOC from './components/HooksHOC';

export class App extends React.Component {
  render() {
    return (
      // Example 1
      // <HooksCrash />

      // Example 2
      // <HooksRenderProps />

      // Example 3
      // <HooksHOC />

      // Example 4
      <WithReactHooks />
    );
  }
}

export default App;
