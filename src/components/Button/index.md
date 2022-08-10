---
order: 2
group:
  path: /normal
  title: 通用
  order: 1
---

## Button

```tsx
import React from 'react';
import { Button, Message } from 'l-ui';

export default () => {
  return (
    <>
      <div>
        <Button size="large">Primary</Button>
        <Button type="info" size="small">
          Info
        </Button>
        <Button type="warning" disabled>
          Warning
        </Button>
        <Button type="success" round>
          Success
        </Button>
        <Button
          type="danger"
          onClick={() => {
            Message.danger('danger danger！！！');
          }}
        >
          Danger
        </Button>
      </div>
    </>
  );
};
```
