import React, { ReactElement, ReactNode, FC, cloneElement, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { createPortal } from 'react-dom';
import Position from '../Position';

import { Placement } from '../../types/placement';
import './index.less';

interface ITooltipsProps {
  children: ReactElement<any>;
  /** 内容 */
  content: string;
  /** 定位 */
  placement?: `${Placement}`;
  /** 颜色 */
  color?: string;
}

const Tooltip: FC<ITooltipsProps> = ({
  children,
  content,
  placement = Placement.BOTTOM,
  color,
}) => {
  const triggerElRef = useRef<any>(null);

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const HTML = createPortal(
    <CSSTransition
      in={visible}
      timeout={300}
      unmountOnExit
      classNames="l__tooltip-transition-wrapper"
    >
      <Position triggerRef={triggerElRef} placement={placement} color={color}>
        {content}
      </Position>
    </CSSTransition>,
    document.body,
  );
  return (
    <>
      {cloneElement(children, {
        ref: triggerElRef,
        onMouseEnter: show,
        onMouseLeave: hide,
      })}
      {HTML}
    </>
  );
};

export default Tooltip;
