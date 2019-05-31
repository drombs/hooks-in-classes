import { useEffect, useState } from 'react';

interface IMousePosition {
  x: number;
  y: number;
}

export function useMousePosition(listen = true): IMousePosition {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (listen) {
      let handler = (event: any) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener('mousemove', handler);

      return () => {
        window.removeEventListener('mousemove', handler);
      };
    }
  }, [listen]);

  return position;
}
