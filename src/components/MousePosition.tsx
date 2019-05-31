import { FunctionComponent } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

type MousePositionChildren = (mousePosition: IMousePosition) => any;

interface IMousePositionProps {
  children: MousePositionChildren;
}

interface IMousePosition {
  x: number;
  y: number;
}

export const MousePosition: FunctionComponent<IMousePositionProps> = ({
  children,
}) => {
  const mousePosition: IMousePosition = useMousePosition();

  return children(mousePosition);
};
