import React, { FC, ReactElement, forwardRef, Ref } from 'react';
import './index.less';

enum Types {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  DANGER = 'danger',
}
type ITypes = `${Types}`;

enum Sizes {
  MIDDLE = 'middle',
  SMALL = 'small',
  LARGE = 'large',
}
type ISizes = `${Sizes}`;
interface IProps {
  children: ReactElement | string;
  type?: ITypes;
  round?: boolean;
  disabled?: boolean;
  size?: ISizes;
  onClick?: (e: MouseEvent) => void;
}

const Button: FC<IProps> = forwardRef(
  (
    {
      type = Types.PRIMARY,
      round = false,
      disabled = false,
      size = Sizes.MIDDLE,
      onClick,
      children,
      ...restProps
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const handleClick: React.MouseEventHandler<HTMLElement> = (e: any): void => {
      if (!onClick) {
        e.preventDefault();
        return;
      }
      onClick(e);
    };

    return (
      <button
        ref={ref}
        {...restProps}
        onClick={handleClick}
        className={`l__button l__button-${type} l__button-${size}${disabled ? ' is-disabled' : ''}${
          round ? ' is-round' : ''
        }`}
      >
        {children}
      </button>
    );
  },
);

export default Button;
