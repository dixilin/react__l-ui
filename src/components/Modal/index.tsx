import React, { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Button from '../Button';
import './index.less';
interface IProps {
  visible: boolean;
  title: string;
  closable?: boolean;
  okText?: string;
  cancelText?: string;
  maskClosable?: boolean;
  onOk: () => void;
  onCancel: () => void;
  children: ReactNode;
}
const Modal: FC<IProps> = ({
  visible = false,
  title,
  closable = true,
  maskClosable = true,
  okText = '确定',
  cancelText = '取消',
  children,
  onOk,
  onCancel,
}) => {
  const close = () => {
    onCancel && onCancel();
  };

  const confirm = () => {
    onOk && onOk();
  };

  const maskClick = () => {
    if (!maskClosable) {
      return;
    }
    close();
  };
  return createPortal(
    <div className="l__modal-root">
      <CSSTransition
        in={visible}
        timeout={300}
        unmountOnExit
        classNames="l__modal-mask-transition-wrapper"
      >
        <div className="modal-mask" onClick={maskClick}></div>
      </CSSTransition>
      <CSSTransition
        in={visible}
        timeout={300}
        unmountOnExit
        classNames="l__modal-wrapper-transition-wrapper"
      >
        <div className="modal-wrapper">
          <div className="title">
            <h4>{title}</h4>
            {closable && (
              <span className="close-icon" onClick={close}>
                X
              </span>
            )}
          </div>
          <div className="content">{children}</div>
          <div className="footer">
            <Button type="info" onClick={close}>
              {cancelText}
            </Button>
            <Button onClick={confirm}>{okText}</Button>
          </div>
        </div>
      </CSSTransition>
    </div>,
    document.body,
  );
};

export default Modal;
