import React, { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Button from '../Button';
import './index.less';
interface IProps {
  /** 是否可见 */
  visible: boolean;
  /** 标题 */
  title: string;
  /** 是否显示关闭按钮 */
  closable?: boolean;
  /** 确定按钮文案 */
  okText?: string;
  /** 取消按钮文案 */
  cancelText?: string;
  /** 遮罩点击可关闭 */
  maskClosable?: boolean;
  /** 点击确定的回调 */
  onOk: () => void;
  /** 点击取消的回调 */
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
