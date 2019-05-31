import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    return <Component position={useMousePosition()} {...props} />;
  };
};
