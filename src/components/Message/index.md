---
order: 1
group:
  path: /response
  title: 反馈
  order: 3
---

## message

```tsx
import React from 'react';
import { message, Button } from 'chazi-ui';

export default () => {
  return (
    <>
      <Button
        type="success"
        onClick={() => {
          message.success('我是你爸爸success');
        }}
      >
        success
      </Button>
      <Button
        type="info"
        onClick={() => {
          message.info('我是你爸爸info');
        }}
      >
        info
      </Button>
      <Button
        type="warning"
        onClick={() => {
          message.warning('我是你爸爸warning');
        }}
      >
        warning
      </Button>
      <Button
        type="danger"
        onClick={() => {
          message.danger('我是你爸爸danger');
        }}
      >
        danger
      </Button>
    </>
  );
};
```

### API

- message.success(content)
- message.info(content)
- message.warning(content)
- message.danger(content)
