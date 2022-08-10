---
order: 2
group:
  path: /data
  title: 数据展示
  order: 1
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
