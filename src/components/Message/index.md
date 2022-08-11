---
order: 1
group:
  path: /response
  title: 反馈
  order: 3
---

## Message

```tsx
import React from 'react';
import { Message, Button } from 'l-ui';

export default () => {
  return (
    <>
      <Button
        type="success"
        onClick={() => {
          Message.success('我是你爸爸success');
        }}
      >
        success
      </Button>
      <Button
        type="info"
        onClick={() => {
          Message.info('我是你爸爸info');
        }}
      >
        info
      </Button>
      <Button
        type="warning"
        onClick={() => {
          Message.warning('我是你爸爸warning');
        }}
      >
        warning
      </Button>
      <Button
        type="danger"
        onClick={() => {
          Message.danger('我是你爸爸danger');
        }}
      >
        danger
      </Button>
    </>
  );
};
```
