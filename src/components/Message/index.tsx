import React, { useState, FC } from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './index.less';

enum MessageType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface IMessageProps {
  text: string;
  type?: `${MessageType}`;
}

type INotice = IMessageProps & {
  key: string;
};

type IMessageApi = {
  info: (text: string) => void;
  success: (text: string) => void;
  warning: (text: string) => void;
  danger: (text: string) => void;
};

const Message: FC<IMessageProps> = ({ text, type = MessageType.INFO }) => {
  return (
    <div className="l__notice-wrapper">
      <div className={`l__notice-content l__notice-content-${type}`}>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

let add: (notice: INotice) => void;
const DURATION = 4000;
const MessageContainer = () => {
  const [notices, setNotices] = useState<INotice[]>([]);

  const remove = (notice: INotice) => {
    const { key } = notice;
    setNotices((prevNotices) => prevNotices.filter(({ key: itemKey }) => key !== itemKey));
  };

  add = (notice: INotice) => {
    setNotices((prevNotices) => [...prevNotices, notice]);
    setTimeout(() => {
      remove(notice);
    }, DURATION);
  };

  return (
    <TransitionGroup className="l__message-transition-group">
      {notices.map(({ text, key, type }) => (
        <CSSTransition key={key} timeout={300} classNames="l__message-transition-item">
          <Message type={type} text={text} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const createMessage = () => {
  let el = document.querySelector('.l__message-container');
  if (!el) {
    el = document.createElement('div');
    el.className = 'l__message-container';
    document.body.append(el);
  }
  ReactDOM.render(<MessageContainer />, el);
};

createMessage();

let _id = 0;
const getUuid = () => {
  const uuid = `MESSAGE_${_id}`;
  _id++;
  return uuid;
};

const messageApi: IMessageApi = {
  info: (text) => {
    add({
      text,
      type: MessageType.INFO,
      key: getUuid(),
    });
  },
  success: (text) => {
    add({
      text,
      type: MessageType.SUCCESS,
      key: getUuid(),
    });
  },
  warning: (text) => {
    add({
      text,
      type: MessageType.WARNING,
      key: getUuid(),
    });
  },
  danger: (text) => {
    add({
      text,
      type: MessageType.DANGER,
      key: getUuid(),
    });
  },
};

export default messageApi;
