import React, { RefObject, ReactNode, FC, useRef, useLayoutEffect } from 'react';
import useClientRect from '../../hooks/useClientRect';
import usePlacement from '../../hooks/usePlacement';
import { Placement } from '../../types/placement';

import './index.less';

interface IPositionProps {
  triggerRef: RefObject<HTMLElement | null>;
  children: ReactNode;
  placement?: Placement;
  color?: string;
}

const Position: FC<IPositionProps> = ({
  triggerRef,
  children,
  placement = Placement.BOTTOM,
  color = 'rgba(0, 0, 0, 0.9)',
}) => {
  const contentElRef = useRef<HTMLDivElement>(null);

  const [triggerRect] = useClientRect(triggerRef);
  const [contentRect] = useClientRect(contentElRef);

  const position = usePlacement({ triggerRect, contentRect, placement });
  const getArrowStyle = () => {
    let obj = {};
    switch (placement) {
      case Placement.BOTTOM:
        obj = {
          transform: 'none',
          left: '8px',
          borderColor: 'transparent',
          borderBottomColor: color,
        };
        break;
      case Placement.BOTTOM_LEFT:
        obj = {
          transform: 'none',
          left: '8px',
          borderColor: 'transparent',
          borderBottomColor: color,
        };
        break;
      case Placement.BOTTOM_RIGHT:
        obj = {
          left: 'auto',
          right: '8px',
          transform: 'none',
          borderColor: 'transparent',
          borderBottomColor: color,
        };
        break;
      case Placement.LEFT:
        obj = {
          transform: 'translateY(-50%)',
          right: '-16px',
          left: 'auto',
          top: '50%',
          borderColor: 'transparent',
          borderLeftColor: color,
        };
        break;
      case Placement.RIGHT:
        obj = {
          transform: 'translateY(-50%)',
          left: '-16px',
          top: '50%',
          borderColor: 'transparent',
          borderRightColor: color,
        };
        break;
      case Placement.TOP:
        obj = {
          top: 'auto',
          bottom: '-16px',
          borderColor: 'transparent',
          borderTopColor: color,
        };
        break;
      case Placement.TOP_LEFT:
        obj = {
          top: 'auto',
          bottom: '-16px',
          transform: 'none',
          left: '8px',
          borderColor: 'transparent',
          borderTopColor: color,
        };
        break;
      case Placement.TOP_RIGHT:
        obj = {
          top: 'auto',
          bottom: '-16px',
          left: 'auto',
          right: '8px',
          transform: 'none',
          borderColor: 'transparent',
          borderTopColor: color,
        };
        break;
      default:
        break;
    }
    return obj;
  };

  return (
    <div
      className="l__tooltip-inner"
      style={{ left: position.left, top: position.top, background: color }}
      ref={contentElRef}
    >
      {children}
      <div className="arrow" style={{ ...getArrowStyle() }}></div>
    </div>
  );
};

export default Position;
